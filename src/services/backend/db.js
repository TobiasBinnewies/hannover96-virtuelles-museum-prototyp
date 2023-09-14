import { MongoClient } from 'mongodb'

export default async function mongodb() {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  }
  const uri = process.env.MONGODB_URI
  const client = await MongoClient.connect(uri, {})
  const database = client.db()
  return database
}
