import React from 'react';
import foto from  '../assets/retrato.jpg';
import resume from '../assets/Resume-Said.pdf';

const About = () => {
  return (
    <section id="about" className="h-100 flex flex-wrap items-center min-h-screen pt-20 max-md:pt-24">

        <div id="skills" className="aparece grid grid-cols-12 gap-4 w-full mt-10 md:mt-20">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-9 ">

                <h6 className="text-4xl font-bold mb-7 sm:mb-12 block">Skills</h6>
                <p className="text-xl mb-7">My favorite tools for creating digital products:</p>
                <div className="">
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">HTML</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">CSS3</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">Javascript/ES6</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">Bootstrap</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">Less</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">TailWind</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">ReactJs</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">WordPress</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">GIT/Github</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">Adobe Illustrator</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">Adobe Photoshop</p>
                    <p className="sm:text-xl text-slate-900 bg-white/25 p-4 mt-0 mt-4 mx-4 ml-0 inline-block">Figma</p>
                </div>

            </div>
        </div>

        <div id="experience" className="grid grid-cols-12 gap-4 w-full mt-10 md:mt-20">
            <div className='col-start-2 lg:col-start-3 col-span-10 lg:col-span-9  grid grid-cols-8 md:grid-cols-9 gap-4 gap-y-8'>
                <h6 className="aparece text-4xl font-bold sm:mb-5 col-span-full">Experience</h6>
                <div className="aparece col-span-full grid grid-cols-9 gap-4 text-slate-900">
                    <div className="col-span-7">
                        <p className='text-xl mb-2 font-semibold'>Freelance designer:</p>
                        <p className='text-lg  '>Last year I started collaborating with a print shop and managed all design processes, dealing directly with end clients: from briefing, sketches, to final artwork for printing, etc.</p>
                    </div>
                    <div className="col-span-2 text-xl text-slate-900">
                        <p className='mt-1 text-sm md:text-lg text-right capitalize'>jul 2022/ now</p>
                    </div>
                </div>

                <div className="aparece col-span-full grid grid-cols-9 gap-4 text-slate-900">
                    <div className="col-span-7">
                        <p className='text-lg mb-2 font-semibold'>Web developer at KreativeWork:</p>
                        <p className='text-lg  '>I worked developing and maintaining web projects based on different CMS such as Wordpress and PrestaShop. I was also involved on marketing task such as creating social media content for clients, building email templates and managing e-mail marketing campaings using Mailchimp among many other things.</p>
                    </div>
                    <div className="col-span-2 text-slate-900">
                        <p className='mt-1 text-sm md:text-lg text-right capitalize'>jan 2021/ jul 2022</p>
                    </div>
                </div>

                <div className="aparece col-span-full grid grid-cols-9 gap-4 text-slate-900">
                    <div className="col-span-7">
                        <p className='text-lg mb-2 font-semibold'>Other relevant experience:</p>
                        <p className='text-lg  '>I happen to have quite a diverse curriculum since I have worked in many jobs while studding.
                        My favorite experience was the year I spent as a teacher in a small academy, since working with teenagers and kids is so fun and fulfilling.
                        However, I think that the most valuable experience I got was as a salesperson working door to door. That job gave me a lot of resilience and communication skills.</p>
                    </div>
                </div>
            </div>
            <div className='aparece col-start-2 lg:col-start-3 col-span-10 lg:col-span-9  grid grid-cols-8 md:grid-cols-9 gap-4 gap-y-8 mt-10'>
                <h6 className="text-4xl font-bold sm:mb-5 col-span-full">Education</h6>
                <div className="col-span-full grid grid-cols-9 gap-4 text-slate-900">
                    <div className="col-span-7">
                        <p className='text-lg mb-2 font-semibold'>Graphic Design Bachelor Degree:</p>
                        <p className='text-lg  '>Escuela Superior de Diseño de Madrid</p>
                    </div>
                    <div className="col-span-2 text-slate-900">
                        <p className='mt-1 text-sm md:text-lg text-right capitalize'>2016/ 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About