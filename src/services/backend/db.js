import { MongoClient, ServerApiVersion } from 'mongodb'

export async function findOneDB(collection, query) {
  return find(collection, query, true)
}

export async function findDB(collection, query) {
  return find(collection, query, false)
}

export async function aggregateDB(collection, query) {
  const client = await getClient()
  const db = client.db()
  const result = await db.collection(collection).aggregate(query).toArray()
  await client.close()
  return result
}

export async function insertDB(collection, data) {
  const client = await getClient()
  const db = client.db()
  const result = await db.collection(collection).insertOne(data)
  await client.close()
  return result
}

async function getClient() {
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

  await client.connect()
  return client
}

async function find(collection, query, one) {
  const client = await getClient()
  const db = client.db()
  let result = await db.collection(collection)[one ? 'findOne' : 'find'](query)
  if (!one) result = await result.toArray()
  await client.close()
  return result
}
