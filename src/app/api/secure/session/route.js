import apiHandler from '@backend/api/api-helper'
import { NextResponse } from 'next/server'

export async function GET(req) {
    return apiHandler(handler)(req)
}

export async function handler(req) {
  return NextResponse.json({ session: req.auth }, { status: 200 })
}
