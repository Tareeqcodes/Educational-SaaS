import { Client, Databases } from 'node-appwrite';
import algoliasearch from 'algoliasearch';

const projectId = process.env.PROJECT_ID;
const apiKey = process.env.API_KEY;

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId)
    .setKey(apiKey);

  const databases = new Databases(client);

  const algoliaClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_ID
  );
  const index = algoliaClient.initIndex('edusphere_search');

  try {
    const payload = JSON.parse(req.body);
    log(`Payload received: ${JSON.stringify(payload)}`);

    const databaseId = process.env.DATABASE_ID;
    const collectionId = process.env.COLLECTION_ID;

    if (req.path === '/sync-existing') {
      log('Starting initial synchronization...');
      let page = 1;
      const limit = 100;

      while (true) {
        const response = await databases.listDocuments(databaseId, collectionId, [], limit, (page - 1) * limit);

        if (response.documents.length === 0) {
          log('No more documents to sync.');
          break; // Exit the loop
        }

        const objects = response.documents.map((doc) => ({
          objectID: doc.$id,
          ...doc,
        }));

        await index.saveObjects(objects); // Batch upload to Algolia
        log(`Synced ${objects.length} documents to Algolia from page ${page}`);

        page++;
      }
      return res.json({ success: true, message: 'Initial sync completed successfully.' });
    }

    const document = await databases.getDocument(databaseId, collectionId, payload.$id);
    log(`Document fetched from Appwrite: ${JSON.stringify(document)}`);

    const isCreateOrUpdate =
      req.headers['x-appwrite-event'] === 'databases.documents.create' ||
      req.headers['x-appwrite-event'] === 'databases.documents.update';

    if (isCreateOrUpdate) {
      await index.saveObject({
        objectID: document.$id,
        ...document,
      });
      log(`Document synced to Algolia: ${document.$id}`);
    }

    if (req.headers['x-appwrite-event'] === 'databases.documents.delete') {
      await index.deleteObject(payload.$id);
      log(`Document removed from Algolia: ${payload.$id}`);
    }

    return res.json({ success: true, message: 'Operation completed successfully.' });
  } catch (err) {
    error('Error during Algolia sync: ' + err.message);
    return res.json({ success: false, message: 'Failed to sync data with Algolia.' });
  }
};
