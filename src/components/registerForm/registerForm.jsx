'use client'

import { register } from '@/lib/action'
import styles from './registerForm.module.css'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined)

  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/login')
  }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Nom d'utilisateur" name="username" />
      <input type="email" placeholder="Adresse email" name="email" />
      <input type="password" placeholder="Mot de passe" name="password" />
      <input
        type="password"
        placeholder="Confirmer le mot de passe"
        name="passwordRepeat"
      />
      <button>S&apos;inscrire</button>
      {state?.error}
      <Link href="/login">
        Vous avez déja un compte ? <b>Se connecter</b>
      </Link>
    </form>
  )
}

export default RegisterForm
