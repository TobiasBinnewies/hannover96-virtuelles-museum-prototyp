import { hash, compare, genSalt } from 'bcrypt'
import { query } from './db'

export async function hashPassword(password) {
  const salt = await genSalt(12)
  const hashedPassword = await hash(password, salt)
  return hashedPassword
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword)
  return isValid
}

// export async function getSessionFromAuthorizationHeader(req) {
//   const { id, expires } = req.auth
//   const { rows, error } = await query('SELECT * FROM users WHERE id = ?', [id])

//   if (error) {
//     throw { name: 'Internal Error', message: error.message }
//   }

//   const [user] = rows

//   if (!user) {
//     throw { name: 'No user found', message: 'No user matches this id!' }
//   }
//   return { user, expires }
// }
