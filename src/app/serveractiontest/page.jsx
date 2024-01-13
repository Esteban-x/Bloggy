import { addPost, deletePost } from '@/lib/action'

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="titre" name="title" />
        <input type="text" placeholder="description" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Creer</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Supprimer</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage
