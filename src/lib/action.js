'use server'

import { revalidatePath } from 'next/cache'
import { Post, User } from './models'
import { connectToDb } from './utils'
import { signIn, signOut } from './auth'
import bcrypt from 'bcryptjs'
import nodemailer from 'nodemailer'

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData)

  try {
    connectToDb()
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    })

    await newPost.save()
    console.log('sauvegardé dans la db')
    revalidatePath('/blog')
    revalidatePath('/admin')
  } catch (err) {
    console.log(err)
    return { error: 'Un problème est survenu' }
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDb()

    await Post.findByIdAndDelete(id)
    console.log('supprimé de la db')
    revalidatePath('/blog')
    revalidatePath('/admin')
  } catch (err) {
    console.log(err)
    return { error: 'Un problème est survenu' }
  }
}

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData)

  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password,
      img,
    })

    await newUser.save()
    console.log('sauvegardé dans la db')
    revalidatePath('/admin')
  } catch (err) {
    console.log(err)
    return { error: 'Un problème est survenu' }
  }
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDb()

    await Post.deleteMany({ userId: id })
    await User.findByIdAndDelete(id)
    console.log('supprimé de la db')
    revalidatePath('/admin')
  } catch (err) {
    console.log(err)
    return { error: 'Un problème est survenu' }
  }
}

export const handleGithubLogin = async () => {
  'use server'
  await signIn('github')
}

export const handleLogout = async () => {
  'use server'
  await signOut()
}

export const sendEmail = async (previousState, formData) => {
  const { name, email, phone, message } = Object.fromEntries(formData)

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  let mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: 'Message utilisateur Bloggy',
    text: `Nom et prénom: ${name}\nAdresse email: ${email}\nNuméro de téléphone: ${phone}\nMessage: ${message}`,
    html: `<p>Nom et prénom: ${name}</p><p>Adresse email: ${email}</p><p>Numéro de téléphone: ${phone}</p><p>Message: ${message}</p>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email envoyé')
    return { success: true }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      error: "Un problème est survenu lors de l'envoi de l'e-mail.",
    }
  }
}

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    return { error: 'Les mots passes de correpondent pas' }
  }

  try {
    connectToDb()

    const user = await User.findOne({ username })

    if (user) {
      return { error: "Ce nom d'utitilisateur existe déja" }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    })

    await newUser.save()
    console.log('saved to db')

    return { success: true }
  } catch (err) {
    console.log(err)
    return { error: 'Un problème est survenu !' }
  }
}

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
  } catch (err) {
    console.log(err)

    if (err.message.includes('CredentialsSignin')) {
      return { error: "Mot de passe ou nom d'utilisateur invalide" }
    }
    throw err
  }
}
