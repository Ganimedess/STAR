import React from 'react'
import { Link } from 'react-router-dom'
import screen1 from '../assets/sr1.png'
import screen2 from '../assets/sr2.png'
import screen3 from '../assets/sr3.png'
import screen4 from '../assets/sr4.png'
import screen5 from '../assets/sr5.png'
import screen6 from '../assets/sr6.png'

const RoblePage = () => {
  return (
    <>
      <div className="min-h-[50vh] mt-16 flex items-center">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12">
              <h1 className="text-6xl font-bold">El Roble</h1>
          </div>

          <div className="col-span-5">
            <h2 className="text-xl italic mb-10">Holistic therapy centre</h2>
            <span className='text-slate-400'>Description:</span>
            <p className="text-xl">'El Roble' is a non-profit association focused on complementary therapies and natural medicine. In this web project, they aimed to promote the association, its philosophy, and the activities they carry out.</p>
            <a href="https://eclectic-mermaid-5f918e.netlify.app/"><button className="border-2 border-white px-2 py-1 rounded-lg hover:bg-white hover:text-black mt-5">Visit -&gt;</button></a>
            <Link to="/work/Freakit!"><span className='ml-7 text-slate-400 underline'>Go to next proyect -&gt;</span></Link>
          </div>
          <div className="col-span-5 col-start-7">
          <span className='text-slate-400'>Type:</span>
            <p className="text-xl mb-5">Web design and development</p>

            <span className='text-slate-400'>logic:</span>
            <p className="text-xl mb-5">JavaScript (vainilla)</p>

            <span className='text-slate-400'>styles:</span>
            <p className="text-xl">less</p>
          </div>
        </div>
      </div>
      <div className='mb-12 flex flex-col items-center border-t-2 border-white'>
        <img loading='lazy' src={screen1} alt="roble web hero" />
        <img loading='lazy' src={screen2} alt="roble web slider" />
        <img loading='lazy' src={screen3} alt="roble web accordion" />
        <img loading='lazy' src={screen4} alt="roble web gallery" />
        <img loading='lazy' src={screen5} alt="roble web cta" />
        <img loading='lazy' src={screen6} alt="roble web contact" />
      </div>
    </>
  )
}

export default RoblePage