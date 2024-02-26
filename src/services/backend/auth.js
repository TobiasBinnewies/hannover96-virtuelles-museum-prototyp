import { hash, compare, genSalt } from 'bcrypt'
import prisma from '@/lib/prisma'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export async function hashPassword(password) {
  const salt = await genSalt(12)
  const hashedPassword = await hash(password, salt)
  return hashedPassword
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword)
  return isValid
}

export async function verifyUser(username, password) {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ username }, { email: username }],
    },
  })

  console.log('user', user)

  if (!user) {
    console.log('No user found')
    throw 'User or Password invalid!'
  }

  const isValid = await verifyPassword(password, user.password)

  if (!isValid) {
    console.log('Password is not valid')
    throw 'User or Password invalid!'
  }

  return user
}

export async function getUserAuth() {
  const cookie = cookies()
  try {
    const token = cookie.get('session-token').value
    const session = jwt.verify(token, process.env.JWT_SECRET)
    console.log('session', session)
    return { ...session, userId: session.userId }
  } catch (err) {
    throw { name: 'UnauthorizedError' }
  }
}
