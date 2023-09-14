import { errorHandler, jwtMiddleware } from '.'

export default function apiHandler(handler) {
  return async (req) => {
    try {
      const url = req.url
      // global middleware
      if (url.startsWith('/api/secure')) {
        await jwtMiddleware(req)
      }
      // route handler
      return await handler(req)
    } catch (err) {
      // global error handler
      return errorHandler(err)
    }
  }
}
