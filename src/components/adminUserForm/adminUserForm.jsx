'use client'

import { addUser } from '@/lib/action'
import styles from './adminUserForm.module.css'
import { useFormState } from 'react-dom'

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined)

  return (
    <form action={formAction} className={styles.container}>
      <h1>Créer un utilisateur</h1>
      <input type="text" name="username" placeholder="Nom d'utilisateur" />
      <input type="text" name="email" placeholder="Adresse email" />
      <input type="password" name="password" placeholder="Mot de passe" />
      <input type="text" name="img" placeholder="Avatar" />
      <select name="isAdmin">
        <option value="false">
          Possédera-t-il le rôle d&apos;administrateur ?
        </option>
        <option value="false">Non</option>
        <option value="true">Oui</option>
      </select>
      <button>Ajouter</button>
      {state?.error}
    </form>
  )
}

export default AdminUserForm
