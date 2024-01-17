import Image from 'next/image'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Bienvenue sur Bloggy</h1>
        <p className={styles.desc}>
          N&apos;oubliez pas de créer un compte si vous souhaitez consulter les
          différents posts des utilisateurs. Contactez le webmaster pour obtenir
          les droits administrateur afin de pouvoir publier des posts et bien
          plus encore. Profitez pleinement de votre expérience sur notre site !
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>En savoir plus</button>
          <button className={styles.button}>Nouveautés</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Logo"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/camera-2.jpg"
          alt="
          Image de la page d'acceuil"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  )
}

export default Home
