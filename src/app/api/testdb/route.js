import mongodb from '@backend/db'
import { NextResponse } from 'next/server'

// To handle a POST request to /api
export async function POST(request) {
    const db = await mongodb()
    const yourCollection = db.collection('user')
    const result = await yourCollection.insertOne({ "test": "MOIN"})
    console.log(result)
    client.close()
    // res.status(201).json({ message: 'Data inserted successfully!' })
    // NextResponse(200).json({ message: 'Data inserted successfully!' })
}
