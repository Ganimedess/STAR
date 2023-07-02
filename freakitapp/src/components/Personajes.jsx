import { personalidades } from '../datos-personajes.json';

const Personajes = () => {

  return (
    
    <section id="personajes" className="mt-24 max-w-[1200px] m-auto max-lg:px-3">
        <h1 className='uppercase font-bold text-2xl mb-7'>Personajes de anime</h1>
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-x-5 gap-y-7">
        {
          personalidades.map(item =>(
            item.personajes.map(element => (
              <li className=''>
                <img className='rounded-[20px]' loading="lazy" src={`./assets/personajes/${element.url}.jpg`} alt={`retrato ${element.nombre}`} />
                <div className='text-center mt-2'>
                <span className='capitalize'>{`${element.nombre}`}</span>
                {` - ${item.tipo}`}
                </div>
              </li>
            ))
          ))
        }
        </ul>
    </section>
    
  )
}

export default Personajes
