import '../App.css'
import tiktok from '../assets/images/iconos/tiktok.png'
import instagram from '../assets/images/iconos/insta.png'
import gmail from '../assets/images/iconos/mail.png'

const Footer = () => {
  return (
    <>
    <ul className="mt-12 lg:mt-32 flex items-center justify-between w-52 m-auto mb-5">
      <li className="h-fit"><a target="_blank" href="https://www.tiktok.com/@freakit__" rel="noreferrer" className='py-3'><img src={tiktok} alt="tiktok" className="max-w-[35px] max-h-[35px]"/></a></li>
      <li className="h-fit"><a target="_blank" href="https://www.instagram.com/freakitapp/?hl=es" rel="noreferrer" className='py-3'><img src={instagram} alt="instagram" className="max-w-[35px] max-h-[35px]"/></a></li>
      <li className="h-fit"><a target="_blank" href="mailto:freakitapp@gmail.com" rel="noreferrer" className='py-3'><img src={gmail} alt="gmail" className="max-w-[35px] max-h-[35px]"/></a></li>
    </ul>
    <footer className="navbar bg-primary  text-white">
      <ul className="flex flex-wrap justify-center max-w-screen-lg m-auto my-5">
        <li className='hover:text-blueF leading-10 mx-5'><a href="/personajes">Personajes anime</a></li>
        <li className='hover:text-blueF leading-10 mx-5'><a href="/personajes">Personalidades</a></li>
        <li className='hover:text-blueF leading-10 mx-5'><a href="/personajes">Preguntas frecuentes</a></li>
        <li className='hover:text-blueF leading-10 mx-5'><a href="/personajes">Ayuda</a></li>
        <li className='hover:text-blueF leading-10 mx-5'><a href="/personajes">Consejos de seguridad</a></li>
        <li className='hover:text-blueF leading-10 mx-5'><a href="/personajes">Reglas de la comunidad</a></li>
        <li className='hover:text-blueF leading-10 mx-5'><a href="/personajes">Términos y condiciones de uso</a></li>
        <li className='hover:text-blueF leading-10 mx-5'><a href="/personajes">Política de privacidad</a></li>
      </ul>
    </footer>
    </>
  )
}

export default Footer