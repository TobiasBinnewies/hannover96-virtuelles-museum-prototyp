import { NextResponse } from 'next/server'

export function errorHandler(req, err) {
  console.log('errorHandler', err);
  if (typeof err === 'string') {
    // custom application error
    return NextResponse.json({ message: err }, { status: 400 })
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return NextResponse.json(
      { message: 'Invalid Token' },
      {
        status: 401,
      },
    )
  }

  if (err.name === 'No user found') {
    return NextResponse.json({ message: 'No user found' }, { status: 403 })
  }
  return NextResponse.json({ message: err.message }, { status: 500 })
}
