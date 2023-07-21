import React from 'react';
import foto from  '../assets/retrato.png'

const About = () => {
  return (
    <section className="h-100 flex flex-wrap items-center min-h-screen">
        <div id="about" className="grid grid-cols-12 gap-4 w-full py-48 max-md:pt-36 max-md:py-0">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-9 grid grid-cols-9 gap-4 gap-y-9">
                <div className="col-span-full md:col-span-4">
                    <h6 className="text-6xl font-bold mb-12">About me</h6>
                    <p className="text-xl">Welcome to my portfolio! I'm thrilled to have you here. My name is Said Sel-lam, and I am a passionate front-end developer and graphic designer based in the vibrant city of Madrid.
                    </p><p className="text-xl mt-3">
                    Beyond the technical skills, I bring a strong sense of creativity, attention to detail, and a passion for problem-solving to every project. I am constantly seeking new challenges and opportunities to expand my skill set, allowing me to offer fresh perspectives and innovative solutions.
                    </p><p className="text-xl mt-3">
                    Thank you for taking the time to explore my portfolio. I invite you to browse through my work and discover how my expertise can contribute to your next digital venture. Feel free to reach out, and let's create something remarkable together!</p>
                </div>
                <div className="col-span-full md:col-start-6 md:col-span-4 mt-6 md:mt-0">
                    <img src={foto} alt="self portrait" />
                </div>
            </div>
        </div>
        <div id="skills" className="grid grid-cols-12 gap-4 w-full mt-40">
            <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-9 grid grid-cols-8 md:grid-cols-9 gap-4 gap-y-8">
                <div className="col-span-full"><h6 className="text-4xl font-bold sm:mb-5">Skills</h6></div>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">HTML</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">CSS3</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">Javascript/ES6</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">Bootstrap</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">Less</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">TailWind</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">ReactJs</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">WordPress</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">GIT/Github</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">Adobe Illustrator</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">Adobe Photoshop</p>
                <p className="col-span-4 md:col-span-3 sm:text-xl text-white bg-slate-900">Figma</p>
            </div>
        </div>
        <div id="services" className="grid grid-cols-12 gap-4 w-full mt-20 md:mt-40">
            <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-9 grid grid-cols-8 md:grid-cols-9 gap-4 gap-y-8">
                <div className="col-span-full"><h6 className="text-4xl font-bold sm:mb-5">Services</h6></div>
                <p className="col-span-4 lg:col-span-3 sm:text-xl text-white bg-slate-900">UI/UX</p>
                <p className="col-span-4 lg:col-span-3 sm:text-xl text-white bg-slate-900">Web design</p>
                <p className="col-span-4 lg:col-span-3 sm:text-xl text-white bg-slate-900">Front-end development</p>
                <p className="col-span-4 lg:col-span-3 sm:text-xl text-white bg-slate-900">Branding</p>
                <p className="col-span-4 lg:col-span-3 sm:text-xl text-white bg-slate-900">Graphic design</p>
                <p className="col-span-4 lg:col-span-3 sm:text-xl text-white bg-slate-900">Ilustration</p>
            </div>
        </div>
        <div id="experience" className="grid grid-cols-12 gap-4 w-full mt-20 md:mt-40">
            <div className='col-start-2 md:col-start-3 col-span-10 md:col-span-9 grid grid-cols-8 md:grid-cols-9 gap-4 gap-y-8'>
                <h6 className="text-4xl font-bold sm:mb-5 col-span-full">Experience</h6>
                <span className="col-span-full grid grid-cols-9 gap-4">
                    <div className="col-span-2 text-2xl text-slate-400">
                        <p className='mt-1 text-sm md:text-xl'>jan2021/ jul2022</p>
                    </div>
                    <div className="col-span-7">
                        <p className='text-2xl mb-2'>Junior developer - KreativeWork</p>
                        <p className='text-lg text-slate-400'>I worked on developing and maintaining web projects based on various CMS such as Wordpress, PrestaShop, SPIP, and also undertook fully customized developments.</p>
                    </div>
                </span>
                <div className="col-span-full grid grid-cols-9 gap-4">
                    <div className="col-span-2 text-2xl text-slate-400">
                        <p className='mt-1 text-sm md:text-xl'>jul2022/ now</p>
                    </div>
                    <div className="col-span-7">
                        <p className='text-2xl mb-2'>Freelance designer</p>
                        <p className='text-lg text-slate-400'>I collaborated with a print shop and managed all design processes, dealing directly with end clients: from briefing, sketches, to final artwork for printing, etc.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="experience" className="grid grid-cols-12 gap-4 w-full mt-5 md:mt-1040">
            <div className='col-start-2 md:col-start-3 col-span-10 md:col-span-9 grid grid-cols-8 md:grid-cols-9 gap-4 gap-y-8'>
                <h6 className="text-4xl font-bold sm:mb-5 col-span-full mt-5">Education</h6>
                <div className="col-span-full grid grid-cols-9 gap-4">
                    <div className="col-span-2 text-2xl text-slate-400">
                        <p className='mt-1 text-sm md:text-xl'>2016/ 2021</p>
                    </div>
                    <div className="col-span-7">
                        <p className='text-2xl mb-2'>Graphic Design Bachelor Degree</p>
                        <p className='text-lg text-slate-400'>Escuela Superior de Diseño de Madrid</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About