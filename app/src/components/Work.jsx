import React from 'react'
import freakitThumbnail from '../assets/thumb-freakit.png'
import elRobleThumbnail from '../assets/thumb-roble.png'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <section className="h-100 flex items-center min-h-screen">
        <div id="work" className="grid grid-cols-12 gap-4 w-full">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-4 gap-y-9">
                <div className="col-span-full lg:col-span-3">
                    <p className="text-xl text-slate-400">Selected projects:</p>
                </div>
                <div className="text-left md:text-center col-span-full grid gap-y-12 mt-5 relative">
                    <Link to={'/work/Freakit!'}>
                    <div className="proyect proyect-freakit flex flex-col md:flex-row justify-center items-start md:items-end flex-wrap max-md:relative">
                        <h6 className="text-5xl md:text-6xl font-bold block px-2">Freakit!</h6>
                        <span className="mt-3 md:mt-0 text-xl md:ml-3 px-2 mim-md:pt-8">Web design for a dating app</span>
                        <img src={freakitThumbnail} alt="preview web Freakit!" className='proyectThumb absolute max-sm:mt-[50%] aparecer' />
                    </div>
                    </Link>
                    <Link to={'/work/elRoble'}>
                    <div className="proyect proyect-roble flex flex-col md:flex-row justify-center items-start md:items-end flex-wrap max-md:relative">
                        <h6 className="text-5xl md:text-6xl font-bold block px-2">El Roble</h6>
                        <span className="mt-3 md:mt-0 text-xl md:ml-3 px-2 mim-md:pt-8">Alternative therapy center website</span>
                        <img src={elRobleThumbnail} alt="preview web el Roble" className='proyectThumb absolute max-sm:mt-[20%] aparecer' />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work