import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Work from './components/Work';
import Freakit from './components/FreakitPage'
import Roble from './components/RoblePage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Overlay from './components/Overlay';
import OverlayLong from './components/OverlayLong';


function App() {


  return (
    <>
      <NavBar/>

      <div className="App text-white">
        <Routes>
          <Route path="/" element={<OverlayLong/>} />
          <Route path="/about" element={<OverlayLong/>} />
          <Route path="/contact" element={<Overlay/>} />
        </Routes>

        <main className="container mx-auto max-w-7xl static">
          <Routes>
            <Route path="/" element={<><Hero/><Work/></>} />
            <Route path="/about" element={<><About/></>} />
            <Route path="/contact" element={<><Contact/></>} />
            <Route path="/work/freakit!" element={<><Freakit/></>} />
            <Route path="/work/elRoble" element={<><Roble/></>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
