'use client'
import Image from 'next/image'
import styles from './contact.module.css'
import { useFormState } from 'react-dom'
import { useEffect, useState } from 'react'
import { sendEmail } from '@/lib/action'
import { useRouter } from 'next/navigation'

const ContactPage = () => {
  const [state, formAction] = useFormState(sendEmail, undefined)
  const [showNotification, setShowNotification] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (state?.success) {
      setShowNotification(true)
      setTimeout(() => {
        setShowNotification(false)
        router.push('/')
      }, 2000)
    }
  }, [state?.success, router])

  return (
    <div>
      {showNotification && (
        <div class={styles.alert} role="alert">
          <p>Succès</p>
          <p>Email envoyé avec succès</p>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill className={styles.img} />
        </div>
        <div className={styles.formContainer}>
          <form action={formAction} className={styles.form}>
            <input type="text" placeholder="Nom et prénom *" name="name" />
            <input type="text" placeholder="Adresse email *" name="email" />
            <input
              type="text"
              placeholder="Numéro de téléphone (Optionnel)"
              name="phone"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message *"
            ></textarea>
            <button>Envoyer</button>
            {state?.error}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
