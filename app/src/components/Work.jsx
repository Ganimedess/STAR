import React from 'react'
import freakitThumbnail from '../assets/thumb-freakit.png'
import elRobleThumbnail from '../assets/thumb-roble.png'
import BeThumbnail from '../assets/thumb-be.png'
import { Link } from 'react-router-dom'

const Work = () => {
    function scrollTop() {
        document.querySelector(".App").scrollTo(0,0);
      }
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
    <section id="work" className="h-100 flex items-start mb-32 mt-16">
        <div className="grid grid-cols-12 gap-4 w-full max-md:pt-36">
            <div className="col-start-2 lg:col-start-2 col-span-10 lg:col-span-11 grid grid-cols-11 gap-0">

                <div className="col-span-full mb-6">
                    <p className="text-xl text-slate-900 hidden">Projects:</p>
                </div>
                <Link onClick={scrollTop} to='/work/Freakit!' className='proyect biggie text-slate-900 rounded-xl hover:bg-white border-2 border-white p-4 col-span-full sm:col-span-3'><div>
                    <img src={freakitThumbnail} alt="freakit thumbnail" />
                    <h6 className="text-5xl md:text-4xl font-bold block mt-7 fontCool">Freakit!</h6>
                    <p className="mt-3 text-xl md:text-2xl mim-md:pt-8">Web page for a dating App</p>
                </div></Link>
                <Link onClick={scrollTop} to='/work/elRoble' className='proyect biggie text-slate-900 rounded-xl hover:bg-white border-2 border-white p-4 col-span-full sm:col-span-3 sm:col-start-5 max-sm:mt-7'><div>
                    <img src={elRobleThumbnail} alt="el roble thumbnail" />
                    <h6 className="text-5xl md:text-4xl font-bold block mt-7 fontCool">El Roble</h6>
                    <p className="mt-3 text-xl md:text-2xl mim-md:pt-8">Alternative therapy center website</p>
                </div></Link>
                <a href='https://www.behance.net/said-sellam' rel='noreferrer' target='_blank' className='proyect biggie text-slate-900 rounded-xl hover:bg-white border-2 border-white p-4 col-span-full sm:col-span-3 sm:col-start-9 max-sm:mt-7'><div>
                    <img src={BeThumbnail} alt="Behance profile thumbnail" />
                    <h6 className="text-5xl md:text-4xl font-bold block mt-7 fontCool">More projects</h6>
                    <p className="mt-3 text-xl md:text-2xl mim-md:pt-8">Check my Behance profile.</p>
                </div></a>

            </div>
        </div>
    </section>
  )
}

export default Work

/*
                <div className="text-left md:text-center col-span-full grid gap-y-16 mt-5 relative">
                    <Link to={'/work/Freakit!'} onClick={scrollTop}>
                    <div className="proyect proyect-freakit max-md:relative">
                        <span className="flex flex-col md:flex-row items-start md:items-end flex-wrap">
                            <h6 onMouseLeave={hoverOut} onMouseEnter={hoverIn} className="text-5xl md:text-6xl font-bold block px-2">Freakit!</h6>
                            <span onMouseLeave={hoverOut} onMouseEnter={hoverIn} className="mt-3 md:mt-0 text-2xl md:text-3xl md:pl-3 px-2 mim-md:pt-8">Web design for a dating app</span>
                        </span>
                        <img src={freakitThumbnail} alt="preview web Freakit!" className='proyectThumb hidden absolute max-sm:mt-[50%] aparecer' />
                    </div>
                    </Link>
                    <Link to={'/work/elRoble'} onClick={scrollTop}>
                    <div className="proyect proyect-roble max-md:relative">
                        <span className="flex flex-col md:flex-row items-start md:items-end flex-wrap">
                            <h6 onMouseLeave={hoverOut} onMouseEnter={hoverIn} className="text-5xl md:text-6xl font-bold block px-2">El Roble</h6>
                            <span onMouseLeave={hoverOut} onMouseEnter={hoverIn} className="mt-3 md:mt-0 text-2xl md:text-3xl md:pl-3 px-2 mim-md:pt-8">Alternative therapy center website</span>
                        </span>
                        <img src={elRobleThumbnail} alt="preview web el Roble" className='proyectThumb hidden absolute max-sm:mt-[40%] aparecer' />
                    </div>
                    </Link>
                </div>
                */