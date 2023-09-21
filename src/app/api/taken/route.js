import { findOneDB } from '@/services/backend/db'
import apiHandler from '@backend/api/api-helper'
import { NextResponse } from 'next/server'

export function POST(req) {
  return apiHandler(handler)(req)
}

async function handler(req) {
  const { email, username } = await req.json()
  if (!email && !username) {
    res.status(422).json({ message: 'Missing email or username' })
  }

  const user = await findOneDB('user', {
    $or: [{ email }, { username }],
  })

  console.log('taken', user)

  if (user) {
    return NextResponse.json({ taken: true }, { status: 200 })
  }
  return NextResponse.json({ taken: false }, { status: 200 })
}
