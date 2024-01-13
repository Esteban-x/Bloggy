import Image from 'next/image'
import styles from './about.module.css'

export const metadata = {
  title: 'Page à propos',
  description: 'Description à propos',
}

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>
          Une expérience de navigation fluide et enrichissante
        </h2>
        <h1 className={styles.title}>À propos de notre plateforme</h1>
        <p className={styles.desc}>
          Notre plateforme offre une expérience de navigation exceptionnellement
          fluide et intuitive. Grâce à notre système de publication optimisé,
          partager vos idées n&apos;a jamais été aussi simple. Profitez
          d&apos;une interface conviviale, d&apos;un chargement rapide des pages
          et d&apos;une interaction sans effort avec les autres utilisateurs. De
          plus, notre plateforme est conçue pour s&apos;adapter à tous les
          appareils, vous offrant une expérience de qualité, que vous soyez sur
          un ordinateur de bureau, un ordinateur portable, une tablette ou un
          smartphone. Rejoignez-nous et découvrez une nouvelle façon de partager
          et de découvrir des idées
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>3 500+</h1>
            <p>Publications partagées</p>
          </div>
          <div className={styles.box}>
            <h1>2 000+</h1>
            <p>Utilisateurs satisfaits</p>
          </div>
          <div className={styles.box}>
            <h1>1 000+</h1>
            <p>Sujets abordés</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="Image à propos"
          fill
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default AboutPage
