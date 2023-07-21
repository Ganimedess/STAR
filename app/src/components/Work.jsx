import React from 'react'
import freakitThumbnail from '../assets/thumb-freakit.png'
import elRobleThumbnail from '../assets/thumb-roble.png'
import { Link } from 'react-router-dom'

const Work = () => {
    //manage the blur effect on proyects names and pictures
    function hoverIn(e) {
        e.target.classList.add('proyect-hide')
        const sibling = e.target.nextSibling ? e.target.nextSibling : e.target.previousSibling
        sibling.classList.add('proyect-hide')
    }
    function hoverOut(e) {
        e.target.classList.remove('proyect-hide')
        const sibling = e.target.nextSibling ? e.target.nextSibling : e.target.previousSibling
        sibling.classList.remove('proyect-hide')
    }

  return (
    <section className="h-100 flex items-start min-h-[60vh] mt-24">
        <div id="work" className="grid grid-cols-12 gap-4 w-fullpy-48 max-md:pt-36 max-md:py-0">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-6">
                <div className="col-span-full lg:col-span-3">
                    <p className="text-xl text-slate-400">Selected projects:</p>
                </div>
                <div className="text-left md:text-center col-span-full grid gap-y-16 mt-5 relative">
                    <Link to={'/work/Freakit!'}>
                    <div className="proyect proyect-freakit max-md:relative">
                        <span className="flex flex-col md:flex-row items-start md:items-end flex-wrap">
                            <h6 onMouseLeave={hoverOut} onMouseEnter={hoverIn} className="text-5xl md:text-6xl font-bold block px-2">Freakit!</h6>
                            <span onMouseLeave={hoverOut} onMouseEnter={hoverIn} className="mt-3 md:mt-0 text-2xl md:text-3xl md:pl-3 px-2 mim-md:pt-8">Web design for a dating app</span>
                        </span>
                        <img src={freakitThumbnail} alt="preview web Freakit!" className='proyectThumb hidden absolute max-sm:mt-[50%] aparecer' />
                    </div>
                    </Link>
                    <Link to={'/work/elRoble'}>
                    <div className="proyect proyect-roble max-md:relative">
                        <span className="flex flex-col md:flex-row items-start md:items-end flex-wrap">
                            <h6 onMouseLeave={hoverOut} onMouseEnter={hoverIn} className="text-5xl md:text-6xl font-bold block px-2">El Roble</h6>
                            <span onMouseLeave={hoverOut} onMouseEnter={hoverIn} className="mt-3 md:mt-0 text-2xl md:text-3xl md:pl-3 px-2 mim-md:pt-8">Alternative therapy center website</span>
                        </span>
                        <img src={elRobleThumbnail} alt="preview web el Roble" className='proyectThumb hidden absolute max-sm:mt-[40%] aparecer' />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work