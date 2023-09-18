import { hash, compare, genSalt } from 'bcrypt'
import mongodb from '@backend/db'

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
  //   const { rows, error } = await query(
  //     'SELECT * FROM users LEFT OUTER JOIN images i ON users.id = i.user_id WHERE email = ? OR username = ?',
  //     [username, username],
  //   )

  const db = await mongodb()
  const userCollection = db.collection('user')
  const user = await userCollection.findOne({
    $or: [{ username }, { email: username }],
  })

  console.log('user', user)

  //   if (error) {
  //     console.log(error)
  //     throw 'Something went wrong: ' + error.message
  //   }

  //   const [user] = rows

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
