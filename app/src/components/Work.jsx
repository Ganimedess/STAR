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
    <section id="work" className="  h-100 flex items-start mb-32 mt-16">
        <div className=" grid grid-cols-12 gap-4 w-full pt-36 max-md:pt-24">

            <div className="aparece lg:col-start-3 col-span-12 lg:col-span-8 grid grid-cols-8 gap-2 md:gap-16 p-3 lg:p-0">
                <p className="  col-span-full text-2xl text-center mb-6 md:mb-0">Selected projects:</p>
                <Link onClick={scrollTop} to='/work/Freakit!' className='  project text-slate-900 col-span-4 bg-white rounded-lg biggie overflow-hidden'>
                    <div className="items-center d-flex">
                        
                        <div className="col-span-full md:col-span-6 flex flex-col justify-center text-center md:text-left p-5">
                            <h6 className="text-3xl md:text-4xl font-bold block fontCool text-center">Freakit!</h6>
                            <p className="mt-3 text-xl md:text-2xl mim-md:pt-8 text-center">Web page for a dating App</p>
                        </div>
                        <img className='col-span-full hidden md:block' src={freakitThumbnail} alt="freakit thumbnail" />
                    </div>
                </Link>
                <Link onClick={scrollTop} to='/work/elRoble' className='  project text-slate-900 col-span-4 bg-white rounded-lg biggie overflow-hidden'>
                    <div className="items-center d-flex">
                        
                        <div className="col-span-full md:col-span-6 flex flex-col justify-center text-center md:text-left p-5">
                            <h6 className="text-3xl md:text-4xl font-bold block fontCool text-center">El Roble</h6>
                            <p className="mt-3 text-xl md:text-2xl mim-md:pt-8 text-center">Alternative therapy center website</p>
                        </div>
                        <img className='col-span-full hidden md:block' src={elRobleThumbnail} alt="el roble thumbnail" />
                    </div>
                </Link>
                <a href='https://www.behance.net/said-sellam' rel='noreferrer' target='_blank' className='  project text-slate-900 col-span-full bg-white rounded-lg biggie overflow-hidden'>
                    <div className="md:grid grid-cols-8 gap-12 py-3 md:py-0">
                        <img className='col-span-2 hidden md:block' src={BeThumbnail} alt="Behance profile thumbnail" />
                        <div className="col-span-full md:col-span-6 flex flex-col justify-center text-center md:text-left">
                            <h6 className="text-3xl md:text-4xl font-bold block fontCool">More projects</h6>
                            <p className="mt-3 text-xl md:text-2xl mim-md:pt-8">Check my Behance profile.</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </section>
  )
}

export default Work