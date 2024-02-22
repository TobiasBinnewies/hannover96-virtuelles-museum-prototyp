'use client'

import { useState } from 'react'
import CheckedInput from '@/components/helper/CheckedInput'

export default function UploadSectionImage({ section }) {
  const [file, setFile] = useState()
  const [title, setTitle] = useState({ value: '', isValid: true, notSet: true })
  const [enabled, setEnabled] = useState(true)

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
    setEnabled(false)
  }

  const validateImageTitleInput = () => {
    if (title.value.trim() === '') {
      setTitle((prev) => ({ ...prev, isValid: false, notSet: false }))
      return
    }
    setTitle((prev) => ({ ...prev, isValid: true, notSet: false }))
  }

  return (
    <form onSubmit={onSubmit}>
      <CheckedInput
        id="imagetitle"
        type="text"
        placeholder={`Trikot Season 2021/22`}
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
        style={{ color: 'blue' }}
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <br />
      <br />
      <input
        className="p-1 bg-[blue] rounded-lg text-white"
        type="submit"
        value="Upload"
        disabled={!enabled}
        style={{opacity: enabled ? 1 : 0.5}}
      />
    </form>
  )
}
