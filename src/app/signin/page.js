"use client";
import Login from '@components/sign-in/Login'
import SignUp from '@components/sign-in/SignUp'
import { useState } from 'react'
import styles from '@components/sign-in/SignIn.module.css'
import { useRouter } from 'next/router'

export default function LoginPage(/*{ session }*/) {
//   const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)

//   if (session) {
//     router.push('/profile')
//   }

  return (
    <form className={styles.form}>
      {isLogin ? <Login /> : <SignUp />}
      <button
        className={styles.changeView}
        onClick={(e) => (
          e.preventDefault(), setIsLogin((prevState) => !prevState)
        )}
      >
        {isLogin ? 'Create new account' : 'Already have an account?'}
      </button>
    </form>
  )
}
