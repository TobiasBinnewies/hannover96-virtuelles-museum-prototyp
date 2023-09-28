import { getUserAuth } from '@backend/auth'
import jwt from 'jsonwebtoken'
import { redirect } from 'next/navigation'

export async function useSession({ redirect: r } = { redirect: true }) {
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
  const { _id, username, email } = user

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
      userId: _id,
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
