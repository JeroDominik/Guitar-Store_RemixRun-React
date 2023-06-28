import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta({ matches }) {
  return [
    {title:'GuitarMDZ - Nosotros'},
    {description:'Venta de guitarras, blog de musica'},
    // Averiguar como traigo los Metas del root, a las Routes hijas
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href: imagen,
      as:'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
        <img src= {imagen} alt="imagen nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante eget erat tincidunt congue. Morbi luctus ornare imperdiet. Curabitur quis arcu nisl. Duis sit amet arcu interdum, aliquam justo non, auctor lectus. Morbi laoreet justo ut arcu ornare posuere. Donec condimentum libero sed vehicula finibus. Cras turpis augue, finibus eu tincidunt vitae, hendrerit nec mi. Etiam venenatis urna massa, nec tristique tortor ultrices sed. Donec augue risus, bibendum ac iaculis eget, dictum sit amet diam. Aenean eget lobortis nisl. Cras tempor lobortis nunc nec lobortis.</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante eget erat tincidunt congue. Morbi luctus ornare imperdiet. Curabitur quis arcu nisl. Duis sit amet arcu interdum, aliquam justo non, auctor lectus. Morbi laoreet justo ut arcu ornare posuere. Donec condimentum libero sed vehicula finibus.</p>
        </div>
        
      </div>
    </main>
  )
}

export default Nosotros