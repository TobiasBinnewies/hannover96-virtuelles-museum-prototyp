import { getTokenFromUser } from '@backend/session'
import { verifyUser } from '@backend/auth'
import apiHandler from '@backend/api/api-helper'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
// import { cookie } from 'next/headers'

export function POST(req) {
  return apiHandler(handler)(req)
}

async function handler(req) {
  const cookie = cookies()
  const { username, password } = await req.json()

  const user = await verifyUser(username, password)

  console.log('user', user);

  const token = getTokenFromUser(user)

  cookie.set('session-token', token)

  return NextResponse.json(
    { token },
    {
      status: 200,
    },
  )
}
