import { Client, Databases } from 'node-appwrite'; 
import algoliasearch from 'algoliasearch';

export default async ({ req, res, log, error }) => {
  
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)   
    .setKey(process.env.API_KEY);           // Ensure the API key is valid

  // Initialize Appwrite Database service
  const databases = new Databases(client);

  // Initialize Algolia Client
  const algoliaClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,  // Make sure this is the correct Algolia App ID
    process.env.ALGOLIA_ADMIN_ID // Make sure this is the correct Algolia Admin API Key
  );
  const index = algoliaClient.initIndex('edusphere_search'); // Ensure the index name is correct

  try {
    // Parse the payload sent by the webhook
    const payload = JSON.parse(req.body);
    log(`Payload received: ${JSON.stringify(payload)}`);

    // Fetch additional data from Appwrite Database if needed
    const document = await databases.getDocument(
      payload.databaseId, // Replace with actual database ID
      payload.collectionId, // Replace with actual collection ID
      payload.$id // Document ID
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
