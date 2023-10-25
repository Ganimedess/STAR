import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";

import '../index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import tiktok from '../assets/images/iconos/tiktok.png'
import instagram from '../assets/images/iconos/insta.png'
import gmail from '../assets/images/iconos/mail.png'
import logoFreakit from '../assets/images/logo-freakit.png'

const Base = () => {
  //this is a react-router-dom hook
  let location = useLocation();
  //it's value changes when router changes (new url)
  React.useEffect(() => { window.scrollTo(0,0) }, [location]);

  //aquí el efecto de animación en scroll.
  //utiliza el intersectionObserver que vigila ciertos elementos marcados con CSS, y cuando intersectan con el viewport, arranca una función
  //le he puesto un threshold distinto para mostrarse que para ocultarse, así prevengo que los elementos se bugeen al borde del viewport

  React.useEffect(() => {
    
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=> {
          if (entry.isIntersecting) {
              entry.target.classList.add('mostrar')
          }
      })
    }, {threshold: .2})
    const observ2 = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=> {
          if (!entry.isIntersecting) {
            entry.target.classList.remove('mostrar')
          }
      })
    })

  const elementosAnimados = document.querySelectorAll('.aparece')
  elementosAnimados.forEach((el) => {
    observer.observe(el)
    observ2.observe(el)
  })

  }, [location]); // Empty dependency array ensures it runs only once after initial render



  return (
    <div className="drawer">
    <input id="my-freak-drawer" type="checkbox" className="drawer-toggle btn" />
      <div className="drawer-content">
        <Header/>

        <Outlet />

        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-freak-drawer" className="drawer-overlay"></label>
        <div className="bg-white h-full flex flex-col">
          <Link to="/" className="ps-2 py-4">
            <img src={logoFreakit} alt="logo freakit!" className="max-w-[148px]" />
          </Link>
          <ul className="menu">
            <li>
              <h2 className="menu-title">Descarga</h2>
              <ul>
                <li><a target='_blank' rel='noreferrer' href="https://play.google.com/store/apps/details?id=com.freakit.dev&hl=es_419&gl=US">Android</a></li>
                <li><a target='_blank' rel='noreferrer' href="https://apps.apple.com/es/app/freakit/id6446035400">Apple IOS</a></li>
              </ul>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <h2 className="menu-title">Ayuda</h2>
              <ul>
                <li><Link to="/ayuda">Ayuda</Link></li>
                <li><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                <li><Link to="/consejos-de-seguridad">Consejos de seguridad</Link></li>
              </ul>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <h2 className="menu-title">Test de personalidad</h2>
              <ul>
                <li><Link to="/personalidades">16 personalidades</Link></li>
                <li><Link to="/personajes">Personajes anime</Link></li>
              </ul>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <h2 className="menu-title">Contacto</h2>
              <ul className='flex items-center'>
                <li><a target="_blank" href="https://www.tiktok.com/@freakitapp" rel="noreferrer" className='py-3'><img src={tiktok} alt="tiktok" className="max-w-[30px] max-h-[35px]"/></a></li>
                <li><a target="_blank" href="https://www.instagram.com/freakitapp/?hl=es" rel="noreferrer" className='py-3'><img src={instagram} alt="instagram" className="max-w-[30px] max-h-[35px]"/></a></li>
                <li><a target="_blank" href="mailto:freakitapp@gmail.com" rel="noreferrer" className='py-3'><img src={gmail} alt="gmail" className="max-w-[30px] max-h-[35px]"/></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Base