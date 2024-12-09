import { Client, Databases } from 'node-appwrite';
import algoliasearch from 'algoliasearch';

// Initialize Appwrite and Algolia clients
export default async ({ req, res, log, error }) => {
  // Appwrite Client
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT) // Appwrite endpoint
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)    // Appwrite project ID
    .setKey(req.headers['x-appwrite-key'] ?? '');            // Appwrite API key

  const databases = new Databases(client);

  // Algolia Client
  const algoliaClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_API_KEY
  );
  const index = algoliaClient.initIndex('edusphere_search'); 

  try {
    // Parse the event payload from Appwrite
    const payload = JSON.parse(req.body);

    if (req.headers['x-appwrite-event'] === 'databases.documents.create' || 
        req.headers['x-appwrite-event'] === 'databases.documents.update') {
      // Add or update the document in Algolia
      await index.saveObject({
        objectID: payload.$id, // Map Appwrite document ID to Algolia objectID
        ...payload,           // Spread all fields from the Appwrite document
      });
      log(`Document synced to Algolia: ${payload.$id}`);
    }

    if (req.headers['x-appwrite-event'] === 'databases.documents.delete') {
      // Remove the document from Algolia
      await index.deleteObject(payload.$id);
      log(`Document removed from Algolia: ${payload.$id}`);
    }

    return res.json({ success: true, message: 'Operation completed successfully.' });
  } catch (err) {
    error('Error during Algolia sync: ' + err.message);
    return res.json({ success: false, message: 'Failed to sync data with Algolia.' });
  }
};
