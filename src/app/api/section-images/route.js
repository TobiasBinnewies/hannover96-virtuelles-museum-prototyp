import apiHandler from '@/services/backend/api/api-helper'
import { NextResponse } from 'next/server'
import { getImages } from '@/services/backend/section-images'
// import { aggregateDB } from '@/services/backend/db' 

export async function GET(req) {
  return apiHandler(handler)(req)
}

async function handler(req) {
  if (!process.env.SECTION_IMAGE_FOLDER) {
    throw new Error(
      'Invalid/Missing environment variable: "SECTION_IMAGE_FOLDER"',
    )
  }
  const section = req.nextUrl.searchParams.get('section')
  const result = await getImages(section)
  return NextResponse.json(result)
}
