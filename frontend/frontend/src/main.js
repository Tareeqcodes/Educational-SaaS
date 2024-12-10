import { Client } from 'node-appwrite';
import algoliasearch from 'algoliasearch';

export default async ({ req, res, log, error }) => {
  // Appwrite Client
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key'] ?? '');

  // Algolia Client
  const algoliaClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_ID
  );
  const index = algoliaClient.initIndex('edusphere_search');

  try {
    const payload = JSON.parse(req.body);

    if (
      req.headers['x-appwrite-event'] === 'databases.documents.create' ||
      req.headers['x-appwrite-event'] === 'databases.documents.update'
    ) {
      await index.saveObject({
        objectID: payload.$id,
        ...payload,
      });
      log(`Document synced to Algolia: ${payload.$id}`);
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
