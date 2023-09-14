import { getTokenFromUser } from '@backend/session'
import { verifyUser } from '@backend/auth'
import apiHandler from '@backend/api/api-helper'
// import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export function POST(req) {
  return apiHandler(handler)(req)
}

async function handler(req) {
  const { username, password } = await req.json()

  const user = await verifyUser(username, password)

  const token = getTokenFromUser(user)

  return NextResponse.json(
    { token },
    {
      status: 200,
      headers: { 'Set-Cookie': `token=${token}` },
    },
  )
}
