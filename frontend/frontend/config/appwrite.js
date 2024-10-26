import { Client, Databases, Account, Storage } from 'node-appwrite';


Client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); 

export const account = new Account(Client);
export const databases = new Databases(Client);
export const storage = new Storage(Client);
export default Client;