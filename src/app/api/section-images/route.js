import apiHandler from '@/services/backend/api/api-helper'
import { NextResponse } from 'next/server'
import { aggregateDB } from '@/services/backend/db'

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
  const data = await aggregateDB(process.env.SECTION_IMAGE_FOLDER, [
    { $match: { section } },
    {
      $lookup: {
        from: 'user',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },
    {
      $project: {
        createdAt: 1,
        title: 1,
        section: 1,
        username: '$user.username',
      },
    },
  ])
  const result = data.map((item) => {
    return {
      ...item,
      path: `${process.env.SECTION_IMAGE_FOLDER}/${item._id}`,
    }
  })
  return NextResponse.json(result)
}
