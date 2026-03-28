import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/proxi';

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri);

export async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db();
    return { client, db };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export { client };