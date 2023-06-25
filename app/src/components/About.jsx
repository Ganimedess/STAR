import React from 'react';
import foto from  '../assets/retrato.png'

const About = () => {
  return (
    <section className="h-100 flex flex-wrap items-center min-h-screen py-44">
        <div id="about" className="grid grid-cols-12 gap-4 w-full">
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
    </section>
  )
}

export default About