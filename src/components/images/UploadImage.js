'use client'

import { useState } from 'react'

export default function UploadImage() {
    const [file, setFile] = useState()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/secure/section-image', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e) {
      // Handle errors here
      console.error(e)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Upload" />
    </form>
  )
}