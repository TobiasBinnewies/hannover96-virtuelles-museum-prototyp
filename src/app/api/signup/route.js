import prisma from '@/lib/prisma'
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

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  })

  if (user) {
    return NextResponse.json(
      { message: 'Email or Username already exists' },
      { status: 422 },
    )
  }

  const hashedPassword = await hashPassword(password)

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      username,
    },
  })

  return NextResponse.json({ message: 'Created user' }, { status: 201 })
}
