import { NextResponse } from 'next/server'

export { errorHandler }

function errorHandler(req, err) {
  if (typeof err === 'string') {
    // custom application error
    return NextResponse.json({ message: err }, { status: 400 })
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    const response = NextResponse.json(
      { message: 'Invalid Token' },
      {
        status: 401,
        headers: {
          'Set-Cookie': `session-token=; Max-Age=0; Path=/; HttpOnly`,
        },
      },
    )
    // response.cookies.delete('session-token')
    return response
  }

  if (err.name === 'No user found') {
    return NextResponse.json({ message: 'No user found' }, { status: 403 })
  }
  return NextResponse.json({ message: err.message }, { status: 500 })
}
