import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
  title: 'Page de contact',
  description: 'Description de la page de contact',
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Nom et prénom *" />
          <input type="text" placeholder="Adresse email *" />
          <input type="text" placeholder="Numéro de téléphone (Optionnel)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message *"
          ></textarea>
          <button>Envoyer</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
