import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import tiktok from './assets/images/iconos/tiktok.png'
import instagram from './assets/images/iconos/insta.png'
import gmail from './assets/images/iconos/mail.png'
import logoFreakit from './assets/images/logo-freakit.png'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="drawer">
    <input id="my-freak-drawer" type="checkbox" className="drawer-toggle btn" />
      <div className="drawer-content">
        <Header/>
        <App />
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-freak-drawer" className="drawer-overlay"></label>
        <div className="bg-white h-full flex flex-col">
          <a href="/" className="ps-2 py-4">
            <img src={logoFreakit} alt="logo freakit!" className="max-w-[148px]" />
          </a>
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
                <li><a href="/ayuda">Ayuda</a></li>
                <li><a href="/preguntas-frecuentes">Preguntas frecuentes</a></li>
                <li><a href="/consejos-de-seguridad">Consejos de seguridad</a></li>
              </ul>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <h2 className="menu-title">Test de personalidad</h2>
              <ul>
                <li><a href="/personalidades">16 personalidades</a></li>
                <li><a href="/personajes">Personajes anime</a></li>
              </ul>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <h2 className="menu-title">Contacto</h2>
              <ul className='flex items-center'>
                <li><a target="_blank" href="https://www.tiktok.com/@freakit__" rel="noreferrer" className='py-3'><img src={tiktok} alt="tiktok" className="max-w-[30px] max-h-[35px]"/></a></li>
                <li><a target="_blank" href="https://www.instagram.com/freakitapp/?hl=es" rel="noreferrer" className='py-3'><img src={instagram} alt="instagram" className="max-w-[30px] max-h-[35px]"/></a></li>
                <li><a target="_blank" href="mailto:freakitapp@gmail.com" rel="noreferrer" className='py-3'><img src={gmail} alt="gmail" className="max-w-[30px] max-h-[35px]"/></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </React.StrictMode>,
)
