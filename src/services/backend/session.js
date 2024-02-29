import { getUserAuth } from '@backend/auth'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
// import { redirect } from 'next/navigation'

export async function useSession({ redirect: r } = { redirect: true }) {
  throw new Error('useSession is not implemented on the server')
  try {
    return await getUserAuth()
  } catch (err) {
    console.log('useSession Server', err)
    if (r) {
      redirect('/signin')
    }
    return undefined
  }
}

export function getTokenFromUser(user) {
  const { id, username, email } = user

  // const profilePicture = {
  //   path: image,
  //   position,
  // };

  const current = new Date()
  const expireDate = new Date(
    current.getTime() + 86400000 * process.env.SESSION_EXPIRE_TIME,
  )
  expireDate.toLocaleDateString()

  const token = jwt.sign(
    {
      userId: id,
      username,
      email,
      // profilePicture,
      expireDate,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: `${process.env.SESSION_EXPIRE_TIME}d`,
    },
  )
  return token
}

export async function getSession() {
  // const cookie = cookies()
  // const router = useRouter()
  let session
  try {
    session = await getUserAuth()
  } catch (err) {
    session = undefined
  }
  return session
}
