import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Work from './components/Work';
import Freakit from './components/FreakitPage'
import Roble from './components/RoblePage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import { Route, Routes, useLocation } from 'react-router-dom';
import Overlay from './components/Overlay';
import OverlayLong from './components/OverlayLong';
import NotFound from './components/NotFound';


function App() {
/*
  let location = useLocation(); //this is a react-router-dom hook
  //it's value changes when router changes (new url)

  React.useEffect(() => {
    document.querySelector('.App').scrollTo(0,0)
    const sect = document.querySelector('.AppMain section')
    if(sect) { sect.classList.toggle("aparecer") }
    else { document.querySelector('.AppMain div').classList.toggle("aparecer")}
  }, [location]);

*/
  return (
    <>
      <NavBar/>
      <div className="App text-white aparecer scroll-smooth">
    <Routes>
          <Route path="/" element={<><OverlayLong/></>} />
          <Route path="/work/freakit!" element={<OverlayLong/>} />
          <Route path="/work/elRoble" element={<OverlayLong/>} />
          <Route path='*' element={<Overlay />}/>
        </Routes>

        <main className="AppMain container mx-auto max-w-7xl static aparecer-d">
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Work />
              <About />
              <Contact /></>} />
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
