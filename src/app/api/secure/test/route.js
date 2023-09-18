import mongodb from '@backend/db'
import { hashPassword } from '@backend/auth'
import apiHandler from '@backend/api/api-helper'
import { NextResponse } from 'next/server'

export function POST(req) {
  return apiHandler(handler)(req)
}

async function handler(req) {
  const { username, email, password } = await req.json()

  if (!email || !password || !username) {
    return NextResponse.json(
      { message: 'Missing email, password or username' },
      { status: 422 },
    )
  }

  const db = await mongodb()
  const userCollection = db.collection('user')

  const user = await userCollection.findOne({ $or: [{ email }, { username }] })

  if (user) {
    return NextResponse.json(
      { message: 'Email or Username already exists' },
      { status: 422 },
    )
  }

  const hashedPassword = await hashPassword(password)

  const result = await userCollection.insertOne({
    email,
    password: hashedPassword,
    username,
  })

  return NextResponse.json({ message: 'Created user' }, { status: 201 })
}
