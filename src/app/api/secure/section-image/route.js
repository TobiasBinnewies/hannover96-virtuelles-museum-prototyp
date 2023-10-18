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
  if (!process.env.SECTION_IMAGE_FOLDER) {
    throw new Error(
      'Invalid/Missing environment variable: "SECTION_IMAGE_FOLDER"',
    )
  }
  if (!process.env.ALLOWED_IMAGE_TYPES) {
    throw new Error(
      'Invalid/Missing environment variable: "ALLOWED_IMAGE_TYPES"',
    )
  }

  const { userId } = req.auth

  const data = await req.formData()
  const file = data.get('file')
  const title = data.get('title')
  const section = data.get('section')

  if (!file || !title || !section || !userId) {
    throw 'Missing required fields'
  }

  if (!process.env.ALLOWED_IMAGE_TYPES.split(',').includes(file.type)) {
    throw 'File type not allowed'
  }

  if (file.size > 1000000) {
    // > 1MB
    throw 'File too large'
  }

  const width = file.width

  const buffer = await formatBufferTo64(file)
  const date = new Date()

  const { insertedId } = await insertDB(process.env.SECTION_IMAGE_FOLDER, {
    title,
    section,
    userId,
    createdAt: date,
  })

  cloudinary.uploader.upload(
    buffer.content,
    {
      public_id: insertedId.toString(),
      tags: process.env.SECTION_IMAGE_FOLDER,
      folder: process.env.SECTION_IMAGE_FOLDER,
    },
    function (error, result) {
      console.log(result, error)
    },
  )

  return NextResponse.json({ success: true })
}
