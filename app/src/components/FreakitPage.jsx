import React from 'react'
import { Link } from 'react-router-dom'
import screen1 from '../assets/sf1.png'
import screen2 from '../assets/sf2.png'
import screen3 from '../assets/sf3.png'
import screen4 from '../assets/sf4.png'
import screen5 from '../assets/sf5.png'
import screen6 from '../assets/sf6.png'
import screen7 from '../assets/sf7.png'

const FreakitPage = () => {
  return (
    <>
    <div className="min-h-[50vh] mt-16 flex items-center">
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-12">
            <h1 className="text-6xl font-bold">Freakit!</h1>
        </div>

        <div className="col-span-5">
          <h2 className="text-xl italic mb-10">Dating app for otakus</h2>
          <span className='text-slate-400'>Description:</span>
          <p className="text-xl">This is a dating app for otakus with a unique feature. When you create your profile, you take a personality test, and you are matched with an anime character who is similar to you. This way, Freakit! focuses on personality and shared interests rather than physical appearance.</p>
          <a target="_blank" rel='noreferrer' href="https://www.freakitapp.es"><button className="border-2 border-white px-2 py-1 rounded-lg hover:bg-white hover:text-black mt-5">Visit -&gt;</button></a>
          <Link to="/work/elRoble"><span className='ml-7 text-slate-400 underline'>Go to next proyect -&gt;</span></Link>
        </div>
        <div className="col-span-5 col-start-7">
        <span className='text-slate-400'>Type:</span>
          <p className="text-xl mb-5">Web design and development</p>

          <span className='text-slate-400'>logic:</span>
          <p className="text-xl mb-5">React</p>

          <span className='text-slate-400'>styles:</span>
          <p className="text-xl">Tailwind CSS + daisyUI</p>
        </div>
      </div>
    </div>
    <div className='mb-12 flex flex-col items-center border-t-2 border-white'>
      <img loading='lazy' src={screen1} alt="freakit web hero" />
      <img loading='lazy' src={screen2} alt="freakit web mockup" />
      <img loading='lazy' src={screen3} alt="freakit web arguments" />
      <img loading='lazy' src={screen4} alt="freakit web video" />
      <img loading='lazy' src={screen5} alt="freakit web carousel" />
      <img loading='lazy' src={screen6} alt="freakit web team" />
      <img loading='lazy' src={screen7} alt="freakit web media" />
    </div>
  </>
  )
}

export default FreakitPage