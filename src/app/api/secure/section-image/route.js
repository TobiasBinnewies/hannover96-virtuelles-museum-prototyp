import apiHandler from '@backend/api/api-helper'
import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import path from 'path'
import parser from 'datauri/parser'
import { insertDB } from '@/services/backend/db'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDANARY_API_SECRET,
})

export async function POST(req) {
  return apiHandler(handler)(req)
}

const formatBufferTo64 = async (file) => {
  const buffer = await file.arrayBuffer()
  return new parser().format(path.extname(file.name).toString(), buffer)
}

async function handler(req) {
  const { userId } = req.auth

  const data = await req.formData()
  const file = data.get('file')
  const title = data.get('title')
  const section = data.get('section')

  if (!file || !title || !section || !userId) {
    throw 'Missing required fields'
  }

  if (file.size > 1000000) {
    // 1MB
    throw 'File too large'
  }

  const buffer = await formatBufferTo64(file)

  const { insertedId } = await insertDB('section-image', {
    title,
    section,
    userId,
  })

  cloudinary.uploader.upload(
    buffer.content,
    {
      public_id: insertedId.toString(),
      tags: 'section-image',
      folder: 'section-image',
    },
    function (error, result) {
      console.log(result, error)
    },
  )

  return NextResponse.json({ success: true })
}
