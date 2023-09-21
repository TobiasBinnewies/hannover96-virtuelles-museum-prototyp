import { errorHandler } from '@backend/api/error-handler'
import { getUserAuth } from '@backend/auth'

export default function apiHandler(handler) {
  return async (req) => {
    try {
      const url = req.nextUrl.pathname
      // global middleware
      if (url.startsWith('/api/secure')) {
        req.auth = await getUserAuth()
      }
      // route handler
      return await handler(req)
    } catch (err) {
      // global error handler
      return errorHandler(req, err)
    }
  }
}
