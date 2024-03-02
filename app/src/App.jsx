import React, { useEffect  } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Cabecera from './components/Cabecera';
import Work from './components/Work';
import Centromc from './components/Centromc';
import Freakit from './components/FreakitPage';
import Roble from './components/RoblePage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import { Route, Routes, useLocation  } from 'react-router-dom';
import OverlayLong from './components/OverlayLong';
import Overlay from './components/Overlay';
import NotFound from './components/NotFound';
import Emojis from './components/Emojis'

function App() {
  const location = useLocation();

  useEffect(() => {

    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=> {
          if (entry.isIntersecting) {
              entry.target.classList.add('mostrar')
          } /*else {
              entry.target.classList.remove('mostrar')
          }*/
      }, {
        threshold: 0.5,
      })
  } )

  const elementosAnimados = document.querySelectorAll('.aparece')
  elementosAnimados.forEach((el) => observer.observe(el))

  }, [location]); // Empty dependency array ensures it runs only once after initial render


  return (
    <>
    <NavBar/>
      <div className="App text-slate-900 aparecer">
      
    <Routes>
          <Route path="/" element={<><OverlayLong/></>} />
          <Route path='*' element={<><Overlay/></>}/>
        </Routes>

        <main className="AppMain container mx-auto max-w-full relative enfocar">
          
          <Routes>
            <Route path="/" element={<>
              <Cabecera />
              <Work />
              <About />
              <Contact /></>} />
            <Route path="/work/centromc" element={<><Centromc/></>} />
            <Route path="/work/freakit!" element={<><Freakit/></>} />
            <Route path="/work/elRoble" element={<><Roble/></>} />
            <Route path='*' element={<NotFound />}/>
            <Route path='/emojis' element={<Emojis />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </>
  );
}

export default App;
