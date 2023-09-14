var { expressjwt: jwt } = require('express-jwt')
const util = require('util')

export async function jwtMiddleware(req, res) {
  const middleware = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
  })
  return util.promisify(middleware)(req, res)
}
