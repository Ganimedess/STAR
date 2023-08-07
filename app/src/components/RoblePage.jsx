import React from 'react'
import { Link } from 'react-router-dom'
import screen1 from '../assets/sr1.png'
import screen2 from '../assets/sr2.png'
import screen3 from '../assets/sr3.png'
import screen4 from '../assets/sr4.png'

const RoblePage = () => {
  let gotop = () => {
    document.querySelector('.App').scroll(0,0)
  }

  return (
    <>
      <section className="min-h-[50vh] pt-32 flex items-center">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-10 col-start-2">
              <h1 className="text-6xl font-bold">El Roble</h1>
          </div>

          <div className="col-span-10 md:col-span-5 col-start-2 md:col-start-2 mb-5 md:mb-7">
            <h2 className="text-xl italic mb-10">Holistic therapy centre</h2>
            <span className='text-slate-400'>Description:</span>
            <p className="text-xl">'El Roble' is a non-profit association focused on complementary therapies and natural medicine. In this web project, they aimed to promote the association, its philosophy, and the activities they carry out.</p>
            <a rel='noreferrer' target='_blank' href="https://elroble.uno/"><button className="border-2 border-white px-2 py-1 rounded-lg hover:bg-white hover:text-black mt-5">Visit -&gt;</button></a>
            <Link to="/work/Freakit!" onClick={gotop}><span className='ml-7 text-slate-400 underline hover:text-white'>Go to next proyect -&gt;</span></Link>
          </div>
          <div className="col-span-10 md:col-span-4 col-start-2 md:col-start-8 mb-12">
          <span className='text-slate-400'>Type:</span>
            <p className="text-xl mb-5">Web design and development</p>

            <span className='text-slate-400'>logic:</span>
            <p className="text-xl mb-5">JavaScript (vainilla)</p>

            <span className='text-slate-400'>styles:</span>
            <p className="text-xl">less</p>
          </div>
        </div>
      </section>
      <div className='my-12 flex flex-col items-center border-t-2 border-white'>
        <img loading='lazy' src={screen1} alt="roble web hero" />
        <img loading='lazy' src={screen2} alt="roble web slider" />
        <img loading='lazy' src={screen3} alt="roble web accordion" />
        <img loading='lazy' src={screen4} alt="roble web gallery" />
      </div>
    </>
  )
}

export default RoblePage