// var { expressjwt: jwt } = require('express-jwt')
// const util = require('util')
import jwt from 'jsonwebtoken'

export async function jwtMiddleware(req) {
  try {
    const token = req.cookies.get('session-token').value
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.auth = decoded
  } catch (err) {
    throw { name: 'UnauthorizedError' }
  }
}
