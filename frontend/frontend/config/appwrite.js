import { Client, Databases, Account, Storage } from 'node-appwrite';


const client = new Client();
client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENPOINT_KEY)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) 

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
