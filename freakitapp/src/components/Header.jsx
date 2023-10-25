import '../App.css'
import { Link } from "react-router-dom";
import logoFreakit from '../assets/images/logo-freakit.png'
import tiktok from '../assets/images/iconos/tiktok.png'
import instagram from '../assets/images/iconos/insta.png'
import gmail from '../assets/images/iconos/mail.png'


const Header = () => {
  return (
    <header className="bg-white/80 fixed top-0 z-50 w-full">
      <nav className="navbar max-w-screen-xl mx-auto justify-between">
        <div>
          <Link to="/" className="">
            <img src={logoFreakit} alt="logo freakit!" className="max-w-[148px]" />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <li className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost hover:bg-base-100 text-primary font-semibold text-lg normal-case">Personalidades</label>
              <ul tabIndex={0} className="dropdown-content rounded-md menu p-2 shadow bg-white">
                <li><Link to="/personalidades">16 personalidades</Link></li>
                <li><Link to="/personajes">Personajes anime</Link></li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover pl-3">
              <label tabIndex={0} className="btn btn-ghost hover:bg-base-100 text-primary font-semibold text-lg normal-case">Ayuda</label>
              <ul tabIndex={0} className="dropdown-content rounded-md menu p-2 shadow bg-white">
                <li><Link to="/ayuda">Ayuda</Link></li>
                <li><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                <li><Link to="/consejos-de-seguridad">Consejos de seguridad</Link></li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover pl-3">
              <label tabIndex={0} className="btn btn-ghost hover:bg-base-100 text-primary font-semibold text-lg normal-case">Contacto</label>
              <ul tabIndex={0} className="dropdown-content rounded-md menu p-2 shadow bg-white">
                <li><a target="_blank" href="https://www.tiktok.com/@freakitapp" rel="noreferrer" className='py-3'><img src={tiktok} alt="tiktok" className="max-w-[35px] max-h-[35px]"/></a></li>
                <li><a target="_blank" href="https://www.instagram.com/freakitapp/?hl=es" rel="noreferrer" className='py-3'><img src={instagram} alt="instagram" className="max-w-[35px] max-h-[35px]"/></a></li>
                <li><a target="_blank" href="mailto:freakitapp@gmail.com" rel="noreferrer" className='py-3'><img src={gmail} alt="gmail" className="max-w-[35px] max-h-[35px]"/></a></li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover pl-3">
              <label tabIndex={0} className="btn btn-ghost bg-base-100 hover:bg-base-200 text-primary font-semibold text-lg normal-case">Descargar</label>
              <ul tabIndex={0} className="dropdown-content rounded-md menu p-2 shadow bg-white">
                <li><a target='_blank' rel='noreferrer' href="https://play.google.com/store/apps/details?id=com.freakit.dev&hl=es_419&gl=US">Android</a></li>
                <li><a target='_blank' rel='noreferrer' href="https://apps.apple.com/es/app/freakit/id6446035400">Apple IOS</a></li>
              </ul>
            </li>
          </ul>
          <label htmlFor="my-freak-drawer" className="btn btn-ghost drawer-button flex md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Header