import React, { useEffect  } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Cabecera';
import Work from './components/Work';
import Centromc from './components/Centromc';
import Freakit from './components/FreakitPage';
import Roble from './components/RoblePage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import { Route, Routes, useLocation  } from 'react-router-dom';
import OverlayLong from './components/OverlayLong';
import NotFound from './components/NotFound';

function App() {
  const location = useLocation();

  let options = {
    threshold: 0.5,
  }

  useEffect(() => {

    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=> {
          if (entry.isIntersecting) {
              entry.target.classList.add('mostrar')
          } /*else {
              entry.target.classList.remove('mostrar')
          }*/
      }, options)
  } )

  const elementosAnimados = document.querySelectorAll('.aparece')
  elementosAnimados.forEach((el) => observer.observe(el))

  }, [location]); // Empty dependency array ensures it runs only once after initial render


  return (
    <>
      <div className="App text-slate-900 aparecer">
    <Routes>
          <Route path="/" element={<><OverlayLong/></>} />
          <Route path='*' element={<></>}/>
        </Routes>

        <main className="AppMain container mx-auto max-w-full static enfocar">
        <NavBar/>
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Work />
              <About />
              <Contact /></>} />
              <Route path="/work/centromc" element={<><Centromc/></>} />
              <Route path="/work/freakit!" element={<><Freakit/></>} />
              <Route path="/work/elRoble" element={<><Roble/></>} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />

      </div>
    </>
  );
}

export default App;
