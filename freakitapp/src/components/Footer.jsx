import '../App.css'
import { Link } from "react-router-dom";
import tiktok from '../assets/images/iconos/tiktok.png'
import instagram from '../assets/images/iconos/insta.png'
import gmail from '../assets/images/iconos/mail.png'

const Footer = () => {
  return (
    <>
    <ul className="mt-12 lg:mt-32 flex items-center justify-between w-52 m-auto mb-5">
      <li className="upScaleOnHover2 h-fit"><a target="_blank" href="https://www.tiktok.com/@freakit__" rel="noreferrer" className='py-3'><img src={tiktok} alt="tiktok" className="max-w-[35px] max-h-[35px]"/></a></li>
      <li className="upScaleOnHover2 h-fit"><a target="_blank" href="https://www.instagram.com/freakitapp/?hl=es" rel="noreferrer" className='py-3'><img src={instagram} alt="instagram" className="max-w-[35px] max-h-[35px]"/></a></li>
      <li className="upScaleOnHover2 h-fit"><a target="_blank" href="mailto:freakitapp@gmail.com" rel="noreferrer" className='py-3'><img src={gmail} alt="gmail" className="max-w-[35px] max-h-[35px]"/></a></li>
    </ul>
    <footer className="navbar bg-primary  text-white">
      <ul className="flex flex-wrap justify-center max-w-screen-lg m-auto my-5">
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/personajes">Personajes anime</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/personalidades">Personalidades</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/ayuda">Ayuda</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/consejos-de-seguridad">Consejos de seguridad</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/reglas-comunidad">Reglas de la comunidad</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/terminos-y-condiciones">Términos y condiciones de uso</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/politica-privacidad">Política de privacidad</Link></li>
      </ul>
    </footer>
    </>
  )
}

export default Footer