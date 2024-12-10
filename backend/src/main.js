import { Client, Databases } from 'node-appwrite';
import algoliasearch from 'algoliasearch';


const projectId = process.env.PROJECT_ID;
const apiKey = process.env.API_KEY

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

    const document = await databases.getDocument(
      databaseId,
      collectionId, 
      payload.$id 
    );
    
    log(`Document fetched from Appwrite: ${JSON.stringify(document)}`);

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
