import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2>Page introuvable</h2>
      <p>La page que vous demandez n&apos;existe pas ou est introuvable</p>
      <Link href="/">Retour à l&apos;acceuil</Link>
    </div>
  )
}

export default NotFound
