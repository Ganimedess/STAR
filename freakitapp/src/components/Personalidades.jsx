import { personalidades } from '../datos-personajes.json';

const Personalidades = () => {
  return (
    <section id="personalidades" className="mt-24 max-w-[1200px] m-auto max-lg:px-3">
      <h1 className='uppercase font-bold text-2xl mb-7'>Tipos de personalidad</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-9">
      {
        personalidades.map(item => (
          <li>
            <figure className='rounded-[20px] aspect-[3/4] overflow-hidden'>
              <img className='' loading='lazy' src={`/assets/personajes/${item.personajes[0].url}.jpg`} alt={`retrato ${item.personajes[0].nombre}`} />
            </figure>
            
            <p className='mt-3 mb-2 font-bold lg:text-xl'>{`${item.tipo}`}</p>
            <p className='text-xs sm:text-sm lg:text-base'>{`${item.descripcion}`}</p>
          </li>
        ))
      }
      </ul>
    </section>
  )
}

export default Personalidades