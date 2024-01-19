import React from 'react'
import ProjectCard from './ProjectCard'
import freakitThumbnail from '../assets/thumb-freakit.png'
import elRobleThumbnail from '../assets/thumb-roble.png'
import centromcThumbnail from '../assets/thumb-centromc.png'
import BeThumbnail from '../assets/thumb-be.png'

const Work = () => {

  return (
    <section id="work" className="flex items-start bg-slate-900">
        <div className=" grid grid-cols-12 gap-4 w-full py-24 max-md:py-24">

            <div className="aparece col-start-2 lg:col-start-3 col-span-10 lg:col-span-9  grid grid-cols-8 gap-2 md:gap-12 p-3 lg:p-0">
                <p className="text-white  col-span-full text-2xl mb-6 md:mb-0">Selected projects:</p>
                <ProjectCard thumbnail={centromcThumbnail} link='/work/centromc' title='Mímate y Cuídate' description='Luxury beauty center'/>
                <ProjectCard thumbnail={freakitThumbnail} link='/work/freakit!' title='Freakit!' description='Landing for a dating app'/>
                <ProjectCard thumbnail={elRobleThumbnail} link='/work/elRoble' title='El Roble' description='Alternative therapy center'/>
                <a href='https://www.behance.net/said-sellam' rel='noreferrer' target='_blank' className='round10 project text-slate-900 col-span-4 bg-[#ffffffe0] hover:bg-white overflow-hidden'>
                    <div className="ititems-stretch flex flex-col h-full">
                        <div className="col-span-full md:col-span-6 flex flex-col justify-center text-center md:text-left p-2 md:p-5 md:px-7">
                            <h6 className="text-2xl md:text-4xl font-bold block fontCool">More projects...</h6>
                            <p className="mt-3 text-md md:text-2xl mim-md:pt-8">Check my Behance profile.</p>
                        </div>
                        <div className='col-span-full hidden md:block h-full'>
                            <img className='object-cover h-full w-full' src={BeThumbnail} alt="behance profile thumbnail" />
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </section>
  )
}

export default Work