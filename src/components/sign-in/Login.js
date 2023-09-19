'use client'

import { useState } from 'react'
import styles from './SignIn.module.css'
import { useRouter } from 'next/navigation'
import CheckedInput from '@components/helper/CheckedInput'
// import { useLogin } from "@service-frontend/session";
import { validateUsername } from '@frontend/validate-input'
import { login } from '@frontend/auth'

export default function Login() {
  const router = useRouter()

  const [username, setUsername] = useState({
    value: '',
    isValid: true,
    notSet: true,
  })
  const [password, setPassword] = useState({
    value: '',
    isValid: true,
    notSet: true,
  })
  const [alertMessage, setAlertMessage] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setAlertMessage(null)
    if (!username.isValid || username.value.trim() === '') {
      setUsername((prev) => ({ ...prev, isValid: false, notSet: false }))
    }
    if (!password.isValid || password.value.trim() === '') {
      setPassword((prev) => ({ ...prev, isValid: false, notSet: false }))
    }
    if (!username.isValid || !password.isValid) {
      setAlertMessage('Please enter valid username and password')
      return
    }

    try {
      await login(username.value, password.value, router)
    } catch (err) {
      setAlertMessage(err.message)
    }
  }

  const validateUsernameInput = () => {
    if (!validateUsername(username.value)) {
      setUsername((prev) => ({ ...prev, isValid: false, notSet: false }))
      return
    }
    setUsername((prev) => ({ ...prev, isValid: true, notSet: false }))
  }

  const validatePasswordInput = () => {
    if (password.value.length < 8) {
      setPassword((prev) => ({ ...prev, isValid: false, notSet: false }))
      return
    }
    setPassword((prev) => ({ ...prev, isValid: true, notSet: false }))
  }

  return (
    <>
      <h1 className={styles.h1}>Login</h1>
      <CheckedInput
        id="username"
        type="text"
        placeholder="Your username or email adress"
        prop={username}
        label="Username or Email"
        inputHandler={(e) =>
          setUsername((prev) => ({ ...prev, value: e.target.value }))
        }
        validateInput={validateUsernameInput}
      />
      <CheckedInput
        id="password"
        type="password"
        placeholder=""
        prop={password}
        setProp={setPassword}
        label="Password"
        inputHandler={(e) =>
          setPassword((prev) => ({ ...prev, value: e.target.value }))
        }
        validateInput={validatePasswordInput}
      />
      <div
        className={styles.alertMessage}
        style={{
          height: alertMessage ? 'auto' : '0px',
          opacity: alertMessage ? '100%' : '0%',
          margin: alertMessage ? '10px 0' : '0',
        }}
      >
        {alertMessage}
      </div>
      <button className={styles.submit} onClick={submit}>
        Login
      </button>
    </>
  )
}
