import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'
import styles from '~/styles/blog.css'


export function meta({data}) {
  if(!data) {
    return [
      {title:'Blog no encontrado'},
      {description:'Venta de Guitarras, Blog no encontrado'}
    ]
  }

  return [
    {title:`GuitarMDZ - ${data.data[0].attributes.titulo}`},
    {description:`Venta de Guitarras, blog ${data.data[0].attributes.titulo}`}
  ]
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    }
  ]
}

export async function loader({params}){
    const {postUrl} = params
    const post = await getPost(postUrl)
    if(post.data.length === 0) {
      throw new Response('', {
        status: 404,
        statusText:'Blog no encontrado'
      })
    }
    return post
}

function Post() {
  const post = useLoaderData()
  const {contenido, imagen, titulo, publishedAt} = post?.data[0]?.attributes

  return (
    <article className='contenedor post mt-3'>
        <img className='imagen' src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`} />

        <div className='contenido'>
            <h3>{titulo} </h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>
        </div>
    </article>
  )
}

export default Post