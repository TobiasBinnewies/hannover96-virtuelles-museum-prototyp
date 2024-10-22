'use client'

import { useState } from 'react'
import styles from './SignIn.module.css'
import { useRouter } from 'next/navigation'
import CheckedInput from '@components/helper/CheckedInput'
// import { useLogin } from "@service-frontend/session";
import { validateUsername } from '@frontend/validate-input'
import { login } from '@frontend/auth'

export default function Login({ setIsLogin }) {
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
  const [loading, setLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    // setAlertMessage(null)
    // if (!username.isValid || username.value.trim() === '') {
    //   setUsername((prev) => ({ ...prev, isValid: false, notSet: false }))
    // }
    // if (!password.isValid || password.value.trim() === '') {
    //   setPassword((prev) => ({ ...prev, isValid: false, notSet: false }))
    // }
    // if (!username.isValid || !password.isValid) {
    //   setAlertMessage('Please enter valid username and password')
    //   return
    // }
    setLoading(true)
    try {
      await login(username.value, password.value, router)
    } catch (err) {
      setAlertMessage(err)
    }
    setLoading(false)
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
      <h1 className={styles.h1}>Kein Login</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.cardlogin} ${styles.card}`}>
            <div
              className={`${styles.cardheader} ${styles.textcenter}`}
              data-backround-color="orange"
            >
              <h4 className={styles.cardtitle}>Anmeldung</h4>
            </div>
            <div className={styles.cardcontent}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-black-900"
                >
                  Email Adresse oder Benutzername
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
                <div className="flex items-center justify-between pt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Passwort
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-black-600 hover:text-black-500"
                    >
                      Passwort vergessen?
                    </a>
                  </div>
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
                    opacity: alertMessage ? '100%' : '0%',
                  }}
                >
                  {alertMessage}
                </div>
              )}
              <button
                className={styles.submit}
                onClick={submit}
                disabled={loading}
                style={{ opacity: loading ? '50%' : '100%' }}
              >
                {' '}
                Anmelden
              </button>
            </div>
            <div className={styles.register}>
              <button
                style={{ color: '#009D3A' }}
                className="text-sm"
                onClick={async (e) => {
                  e.preventDefault()
                  setIsLogin(false)
                }}
              >
                Keinen Zugang? Jetzt registrieren!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
