import { errorHandler, jwtMiddleware } from '.'

export function apiHandler(handler) {
  return async (req, res) => {
    try {
      const url = req.url
      // global middleware
      if (url.startsWith('/api/secure')) {
        await jwtMiddleware(req, res)
      }
      // route handler
      await handler(req, res)
    } catch (err) {
      // global error handler
      errorHandler(err, res)
    }
  }
}
