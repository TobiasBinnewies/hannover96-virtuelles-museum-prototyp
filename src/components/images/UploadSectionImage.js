'use client'

import { useState } from 'react'
import CheckedInput from '@/components/helper/CheckedInput'

export default function UploadSectionImage({ section }) {
  const [file, setFile] = useState()
  const [title, setTitle] = useState({ value: '', isValid: true, notSet: true })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!file || title.notSet || !title.isValid) {
      console.log('not valid')
      return
    }
    console.log('valid');

    try {
      const data = new FormData()
      data.append('file', file)
      data.append('title', title.value)
      data.append('section', section)

      const res = await fetch('/api/secure/section-image', {
        method: 'POST',
        body: data,
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e) {
      // Handle errors here
      console.error(e)
    }
  }

  const validateImageTitleInput = () => {
    setTitle((prev) => ({ ...prev, isValid: true, notSet: false }))
  }

  return (
    <form onSubmit={onSubmit}>
      <p>Bildtitle</p>
      <CheckedInput
        id="imagetitle"
        type="text"
        placeholder="Bildtitel"
        prop={title}
        label="Bildtitel"
        inputHandler={(e) =>
          setTitle((prev) => ({ ...prev, value: e.target.value }))
        }
        validateInput={validateImageTitleInput}
      />
      <br />
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <br />
      <input type="submit" value="Upload" />
    </form>
  )
}
