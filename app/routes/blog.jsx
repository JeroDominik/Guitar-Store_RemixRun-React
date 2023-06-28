import { useLoaderData, Outlet } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"
import { getPosts } from "~/models/posts.server"
import styles from '~/styles/blog.css'


export function meta() {
  return [
    {title: 'GuitarMDZ - Nuestro Blog'},
    {description: 'GuitarMDZ - Blogs de música y Venta de Guitarras'}
  ]
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
} 

function Blog() {
  const posts = useLoaderData()

  return (
    <main className='contenedor'>
      <ListadoPosts 
        posts={posts}
      />
      <Outlet/>
    </main>
  )
}

export default Blog