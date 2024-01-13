import { Post, User } from './models'
import { connectToDb } from './utils'
import { unstable_noStore as noStore } from 'next/cache'

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch (err) {
    console.log(err)
    throw new Error("Les posts n'ont pas été récupérés")
  }
}

export const getPost = async (slug) => {
  try {
    connectToDb()
    const post = await Post.findOne({ slug })
    return post
  } catch (err) {
    console.log(err)
    throw new Error("Les posts n'ont pas été récupérés")
  }
}

export const getUser = async (id) => {
  noStore()
  try {
    connectToDb()
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.log(err)
    throw new Error("Les utilisateurs n'ont pas été récupérés")
  }
}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find()
    return users
  } catch (err) {
    console.log(err)
    throw new Error("Les utilisateurs n'ont pas été récupérés")
  }
}
