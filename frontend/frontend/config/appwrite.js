import { Client, Databases, Account, Storage } from 'node-appwrite';


const client = new Client();
client
    .setEndpoint(import.meta.env.APPWRITE_ENDPOINT_KEY)
    .setProject(import.meta.env.APPWRITE_PROJECT_ID); 

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
