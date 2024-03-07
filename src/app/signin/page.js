"use client";
import Login from '@components/sign-in/Login'
import SignUp from '@components/sign-in/SignUp'
import { useState } from 'react'
import styles from '@components/sign-in/SignIn.module.css'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <form className={styles.form}>
      {isLogin ? <Login setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />}
    </form>
  )
}
