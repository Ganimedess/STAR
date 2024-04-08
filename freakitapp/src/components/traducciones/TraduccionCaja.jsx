import React from 'react';
import espana from '../../assets/images/iconos/espana.png'
import reinoUnido from '../../assets/images/iconos/reino-unido.png'

const TraduccionCaja = ({ urlTraducida, idiomaActual }) => {
  // Asume que tienes un objeto que mapea idiomas a las URLs de sus banderas
  const banderas = {
    es: espana,
    en: reinoUnido,
    // Agrega más idiomas según sea necesario
  };

  // Determina el idioma al que se traducirá
  const idiomaTraducido = idiomaActual === 'en' ? 'es' : 'en'; // Ajusta según los idiomas que manejas

  return (
    <div className='cajaTraduccion' style={{ position: 'fixed', top: 64, right: 0, padding: '10px', zIndex: 1000, backgroundColor: 'white', borderRadius: '0px 0px 0px 5px' }}>
      <img className='traducirDe' src={banderas[idiomaActual]} alt={`Bandera ${idiomaActual}`} />
      <a className='traducirA' href={urlTraducida}>
        <img
          src={banderas[idiomaTraducido]}
          alt={`Bandera ${idiomaTraducido}`}
          style={{ filter: 'grayscale(0%)', cursor: 'pointer' }}
          className='upScaleOnHover'
        />
      </a>
    </div>
  );
};

export default TraduccionCaja;