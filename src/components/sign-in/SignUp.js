'use client'

import styles from './SignIn.module.css'
import { useState, useEffect } from 'react'
import CheckedBadgeInput from '@components/helper/CheckedBadgeInput'
import { useRouter } from 'next/navigation'
import { validateUsername, validateEmail } from '@frontend/validate-input'
import { signup, login } from '@frontend/auth'

export default function SignUp({ setIsLogin }) {
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
  const [loading, setLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null)

  const getAlertMessage = () => {
    return (
      username.badge ||
      email.badge ||
      password.badge ||
      passwordConfirm.badge ||
      alertMessage
    )
  }


  const submit = async (e) => {
    e.preventDefault()

    validateUsernameInput()
    validateEmailInput()
    validatePasswordInput()
    validatePasswordConfirmInput()

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
      setAlertMessage('Please check hints!')
      console.log('Please check hints!');
      return
    }
    setLoading(true)

    try {
      await signup(username.value, email.value, password.value)
      await login(username.value, password.value, router)
    } catch (err) {
      setAlertMessage(err)
    }
    setLoading(false)
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
      <h1 className={styles.h1}>Kein Login</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.cardlogin} ${styles.card}`}>
            <div
              className={`${styles.cardheader} ${styles.textcenter}`}
              data-backround-color="orange"
            >
              <h4 className={styles.cardtitle}>Registrierung</h4>
            </div>
            <div className={styles.cardcontent}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-black-900"
                >
                  Benutzername
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    disabled={loading}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
                    value={username.value}
                    onChange={(e) =>
                      setUsername({
                        value: e.target.value,
                        isValid: true,
                        notSet: false,
                      })
                    }
                    onBlur={validateUsernameInput}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between pt-4"></div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-black-900"
                >
                  Email Adresse
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    disabled={loading}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
                    value={email.value}
                    onChange={(e) =>
                      setEmail({
                        value: e.target.value,
                        isValid: true,
                        notSet: false,
                      })
                    }
                    onBlur={validateEmailInput}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between pt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Passwort
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    disabled={loading}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
                    value={password.value}
                    onChange={(e) =>
                      setPassword({
                        value: e.target.value,
                        isValid: true,
                        notSet: false,
                      })
                    }
                    onBlur={validatePasswordInput}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between pt-4">
                  <label
                    htmlFor="passwordVal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Passwort wiederholen
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="passwordVal"
                    name="passwordVal"
                    type="password"
                    autoComplete="current-password"
                    required
                    disabled={loading}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
                    value={passwordConfirm.value}
                    onChange={(e) =>
                      setPasswordConfirm({
                        value: e.target.value,
                        isValid: true,
                        notSet: false,
                      })
                    }
                    onBlur={validatePasswordConfirmInput}
                  ></input>
                </div>
              </div>
            </div>
            <div className={`${styles.footer} ${styles.textcenter}`}>
              {loading ? (
                <div
                  style={{
                    height: '5rem',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <i className={`${styles.input_loading}`}></i>
                </div>
              ) : (
                <div
                  className={styles.alertMessage}
                  style={{
                    opacity: getAlertMessage() ? '100%' : '0%',
                  }}
                >
                  {getAlertMessage()}
                </div>
              )}
              <button
                className={styles.submit}
                style={{
                  opacity: getAlertMessage() || loading ? '50%' : '100%',
                  cursor:
                    getAlertMessage() || loading ? 'not-allowed' : 'pointer',
                }}
                onClick={submit}
                disabled={getAlertMessage() || loading}
              >
                {' '}
                Registrieren
              </button>
            </div>
            <div className={styles.register}>
              <button
                style={{ color: '#009D3A', opacity: loading ? '50%' : '100%'}}
                className="text-sm"
                onClick={async (e) => {
                  e.preventDefault()
                  setIsLogin(true)
                }}
                disabled={loading}
              >
                Bereits einen Account? Jetzt anmelden!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
