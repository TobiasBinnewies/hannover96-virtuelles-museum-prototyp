import apiHandler from '@backend/api/api-helper'
import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'
import path from 'path'

export async function POST(req) {
  return apiHandler(handler)(req)
}

async function handler(req) {
  // const { userId } = req.auth
  // const { name, section, image } = await req.json()

  const data = await req.formData()
  const file = data.get('file')

  if (!file) {
    return NextResponse.json({ success: false })
  }

  // console.log("cdw", path.join(process.cwd(), 'public', file.name));

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const pathname = path.join(process.cwd(), 'public', file.name)
  await writeFile(pathname, buffer)
  console.log(`open ${pathname} to see the uploaded file`)

  return NextResponse.json({ success: true, path: pathname })
}
