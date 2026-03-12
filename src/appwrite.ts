import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://sfo.cloud.appwrite.io/v1') // SFO Region Endpoint
  .setProject('69b2a192003d9733b244');

export const account = new Account(client);
export const databases = new Databases(client);

// Add your IDs here
export const DATABASE_ID = '69b2add3002ec49f0e15';
export const COLLECTION_ID = 'prompts';

export default client;
