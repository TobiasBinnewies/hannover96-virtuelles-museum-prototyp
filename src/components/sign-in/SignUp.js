'use client'

import styles from './SignIn.module.css'
import { useState, useEffect } from 'react'
import CheckedBadgeInput from '@components/helper/CheckedBadgeInput'
import { useRouter } from 'next/navigation'
import { validateUsername, validateEmail } from '@frontend/validate-input'
import { signup, login } from '@frontend/auth'

export default function SignUp() {
  const router = useRouter()
  const [username, setUsername] = useState({
    value: '',
    isValid: false,
    notSet: true,
    loading: false,
    badge: null,
  })
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    notSet: true,
    loading: false,
    badge: null,
  })
  const [password, setPassword] = useState({
    value: '',
    isValid: false,
    notSet: true,
    loading: false,
    badge: null,
  })
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: '',
    isValid: false,
    notSet: true,
    loading: false,
    passwordValue: '',
    badge: null,
  })
  const [alertMessage, setAlertMessage] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    if (
      !username.isValid ||
      !email.isValid ||
      !password.isValid ||
      !passwordConfirm.isValid
    ) {
      setPassword((prev) => ({ ...prev, notSet: false }))
      setPasswordConfirm((prev) => ({ ...prev, notSet: false }))
      setUsername((prev) => ({ ...prev, notSet: false }))
      setEmail((prev) => ({ ...prev, notSet: false }))
      return
    }

    try {
      await signup(username.value, email.value, password.value)
      await login(username.value, password.value, router)
    } catch (err) {
      setAlertMessage(err)
    }
  }

  const validateUsernameInput = async () => {
    setUsername((prev) => ({ ...prev, loading: true }))
    if (!validateUsername(username.value)) {
      setUsername((prev) => ({
        ...prev,
        isValid: false,
        notSet: false,
        loading: false,
        badge: 'Please enter a valid username!',
      }))
      return
    }
    // Check if username is taken
    const response = await fetch(`/api/taken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username.value }),
    })
    const data = await response.json()
    if (!response.ok) {
      setAlertMessage('Something went wrong: ' + data.message)
      return
    }
    setUsername((prev) => ({
      ...prev,
      isValid: !data.taken,
      notSet: false,
      loading: false,
      badge: data.taken ? 'Username is taken!' : null,
    }))
  }

  const validateEmailInput = async () => {
    setEmail((prev) => ({ ...prev, loading: true }))
    if (!validateEmail(email.value)) {
      setEmail((prev) => ({
        ...prev,
        isValid: false,
        notSet: false,
        loading: false,
        badge: 'Please enter a valid email!',
      }))
      return
    }
    // Check if email is taken
    const response = await fetch(`/api/taken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    })
    const data = await response.json()
    if (!response.ok) {
      setAlertMessage('Something went wrong: ' + data.message)
      return
    }
    setEmail((prev) => ({
      ...prev,
      isValid: !data.taken,
      notSet: false,
      loading: false,
      badge: data.taken ? 'Email is taken!' : null,
    }))
    return
  }

  const validatePasswordInput = () => {
    if (password.value.length < 8) {
      setPassword((prev) => ({
        ...prev,
        isValid: false,
        notSet: false,
        loading: false,
        badge: 'Password must be at least 8 characters long!',
      }))
      return
    }
    setPassword((prev) => ({
      ...prev,
      isValid: true,
      notSet: false,
      loading: false,
      badge: null,
    }))
  }

  const validatePasswordConfirmInput = () => {
    if (passwordConfirm.value !== password.value) {
      setPasswordConfirm((prev) => ({
        ...prev,
        isValid: false,
        notSet: false,
        loading: false,
        badge: 'Passwords do not match!',
      }))
      return
    }
    setPasswordConfirm((prev) => ({
      ...prev,
      isValid: true,
      notSet: false,
      loading: false,
      badge: null,
    }))
  }

  return (
    <>
      <h1 className={styles.h1}>Sign Up</h1>
      <CheckedBadgeInput
        id="username"
        type="text"
        placeholder="Your Username"
        prop={username}
        label="Username"
        setAlertMessage={setAlertMessage}
        inputHandler={(e) =>
          setUsername((prev) => ({ ...prev, value: e.target.value }))
        }
        validateInput={validateUsernameInput}
      />
      <CheckedBadgeInput
        id="email"
        type="email"
        placeholder="user@example.com"
        prop={email}
        label="Your Email"
        setAlertMessage={setAlertMessage}
        inputHandler={(e) =>
          setEmail((prev) => ({ ...prev, value: e.target.value }))
        }
        validateInput={validateEmailInput}
      />
      <CheckedBadgeInput
        id="password"
        type="password"
        placeholder="Your Password"
        prop={password}
        label="Your Password"
        inputHandler={(e) =>
          setPassword((prev) => ({ ...prev, value: e.target.value }))
        }
        validateInput={validatePasswordInput}
      />
      <CheckedBadgeInput
        id="confirm-password"
        type="password"
        placeholder="Confirm Password"
        prop={passwordConfirm}
        label="Confirm Password"
        inputHandler={(e) =>
          setPasswordConfirm((prev) => ({ ...prev, value: e.target.value }))
        }
        validateInput={validatePasswordConfirmInput}
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
      <button className={styles.submit} onClick={submitHandler}>
        Sign Up
      </button>
    </>
  )
}
