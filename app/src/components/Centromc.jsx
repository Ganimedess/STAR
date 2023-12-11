import React from 'react'
import { Link } from 'react-router-dom'
import screen0 from '../assets/sm0.png'
import screen1 from '../assets/sm1.png'

const FreakitPage = () => {
  let gotop = () => {
    document.querySelector('.App').scroll(0,0)
  }


  return (
    <>
    <section id='proyect' className="min-h-[50vh] py-24 flex items-center">
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-8 col-start-2 md:col-start-3">
            <h1 className="text-6xl font-bold">Mímate y Cuídate</h1>
        </div>
        <div className="col-span-10 md:col-span-4 col-start-2 md:col-start-3 mb-5 md:mb-12">
          <h2 className="text-xl italic mb-10">Luxury beauty centre</h2>
          <span className='text-slate-900'>Description:</span>
          <p className="text-xl">Crafting the image of a luxury business was a really pleasant experience. The focal point of the design process was to convey the image of a natural beauty brand with organic cosmetics. The biggest challenge was to put the site together without any images of the place since it's just launching.</p>
          <a target="_blank" rel='noreferrer' href="https://centromc.com/"><button className="biggie text-xl px-4 py-1 rounded-lg bg-white hover:bg-verde mt-9 mr-7">Visit →</button></a>
          <Link to="/work/Freakit!" onClick={gotop}><span className='biggie text-xl text-slate-900 hover:bg-verde px-2 inline-block'>Go to next proyect →</span></Link>
        </div>
        <div className="col-span-10 md:col-span-4 col-start-2 md:col-start-8 mb-12">
        <span className='text-slate-900'>Type:</span>
          <p className="text-xl mb-5">Web design and development</p>

          <span className='text-slate-900'>logic:</span>
          <p className="text-xl mb-5">Wordpress</p>

          <span className='text-slate-900'>styles:</span>
          <p className="text-xl">Block editor + custom CSS</p>
        </div>
      </div>
    </section>
    <section className="w-full bg-slate-900 py-12">
      <div className='my-12 mx-auto flex flex-col items-center max-w-[1200px]'>
        <img loading='lazy' src={screen0} alt="" />
        <img loading='lazy' src={screen1} alt="" />
      </div>
    </section>
  </>
  )
}

export default FreakitPage