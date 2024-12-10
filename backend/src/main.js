import { Client, Databases } from 'node-appwrite'; 
import algoliasearch from 'algoliasearch';

export default async ({ req, res, log, error }) => {
 
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT) 
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID) 
    .setKey(process.env.API_KEY);           

  const databases = new Databases(client);

  const algoliaClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,  
    process.env.ALGOLIA_ADMIN_ID 
  );
  const index = algoliaClient.initIndex('edusphere_search');

  try {
    const payload = JSON.parse(req.body);
    log(`Payload received: ${JSON.stringify(payload)}`);

    const databaseId = process.env.VITE_DATABASE_ID;
    const collectionId = process.env.VITE_COLLECTION_ID;

    const document = await databases.getDocument(
      databaseId,
      collectionId, 
      payload.$id 
    );

    log(`Document fetched from Appwrite: ${JSON.stringify(document)}`);

    // Sync data with Algolia on document create or update
    if (
      req.headers['x-appwrite-event'] === 'databases.documents.create' ||
      req.headers['x-appwrite-event'] === 'databases.documents.update'
    ) {
      await index.saveObject({
        objectID: document.$id, // Using the document's ID as the Algolia objectID
        ...document,            // Include other document fields
      });
      log(`Document synced to Algolia: ${document.$id}`);
    }

    // Remove data from Algolia on document delete
    if (req.headers['x-appwrite-event'] === 'databases.documents.delete') {
      await index.deleteObject(payload.$id);
      log(`Document removed from Algolia: ${payload.$id}`);
    }

    // Return success response
    return res.json({ success: true, message: 'Operation completed successfully.' });
  } catch (err) {
    // Log error for debugging
    error('Error during Algolia sync: ' + err.message);
    return res.json({ success: false, message: 'Failed to sync data with Algolia.' });
  }
};
