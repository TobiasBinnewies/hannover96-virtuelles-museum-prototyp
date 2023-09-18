import { MongoClient, ServerApiVersion } from 'mongodb'

export default async function mongodb() {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  }
  const uri = process.env.MONGODB_URI
  const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    })
  try {
    console.log('Connecting to MongoDB');
    await client.connect()
    console.log('Connected to MongoDB');
    const database = client.db()
    console.log('Database: ', database.databaseName);
    return database
  } catch (err) {
    console.log(err)
  } finally {
    // console.log('Closing MongoDB connection');
    // client.close()
  }
}
