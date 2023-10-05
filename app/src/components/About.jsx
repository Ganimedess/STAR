import React from 'react';
import foto from  '../assets/retrato.png';
import resume from '../assets/Resume-Said.pdf';

const About = () => {
  return (
    <section id="about" className="h-100 flex flex-wrap items-center min-h-screen pt-36 max-md:pt-24">
        <div className="aparece grid grid-cols-12 gap-4 w-full">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-9 grid grid-cols-9 gap-4 gap-y-9">
                <div className="col-span-full md:col-span-4">
                    <h2 className="text-6xl font-bold mb-12 fontCool">About me</h2>
                    <p className="text-xl">Hello, I am Said Sel-lam, a creative and versatile professional with a degree in graphic design and a passion for front-end development. With hands-on experience in React and WordPress, I love crafting visually captivating and user-friendly digital experiences.
                    </p><p className="text-xl mt-3">
                    Beyond my technical skills, I have a diverse background in sales, teaching, and customer service, which has instilled in me a deep sense of empathy and adaptability.
                    </p>
                    <a href={resume} download="Resume-Said.pdf">
                        <button className="resume biggie text-xl bg-white rounded-lg py-2 pl-3 pr-4 mt-10 flex hover:border-verde hover:bg-verde hover:text-black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-4'>
                            <path d="M4 20.3827C4.40471 20.778 4.95361 21 5.52595 21H18.4741C19.0464 21 19.5953 20.778 20 20.3827M12.0012 3V14.9425M12.0012 14.9425L16.9338 10.3793M12.0012 14.9425L7.06859 10.3793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        <span>Resume</span></button>
                    </a>

                </div>
                <div className="col-span-full md:col-start-6 md:col-span-4 mt-6 md:mt-0">
                    <img src={foto} alt="self portrait" />
                </div>
            </div>
        </div>
        <div id="skills" className="aparece grid grid-cols-12 gap-4 w-full mt-10 md:mt-20">
            <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-9">

                <h6 className="text-4xl font-bold mb-7 sm:mb-12 block">Skills</h6>
                <p className="text-xl mb-7">Some of the tools I use to manifest ideas as digital products:</p>
                <div className="">
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">HTML</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">CSS3</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">Javascript/ES6</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">Bootstrap</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">Less</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">TailWind</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">ReactJs</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">WordPress</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">GIT/Github</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">Adobe Illustrator</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">Adobe Photoshop</p>
                    <p className="sm:text-xl text-slate-900 bg-white p-4 mt-0 mb-4 mx-4 ml-0 inline-block">Figma</p>
                </div>

            </div>
        </div>

        <div id="experience" className="grid grid-cols-12 gap-4 w-full mt-10 md:mt-20">
            <div className='aparece col-start-2 md:col-start-3 col-span-10 md:col-span-9 grid grid-cols-8 md:grid-cols-9 gap-4 gap-y-8'>
                <h6 className="text-4xl font-bold sm:mb-5 col-span-full">Experience</h6>
                <div className="col-span-full grid grid-cols-9 gap-4 text-slate-900">
                    <div className="col-span-7">
                        <p className='text-xl mb-2 font-semibold'>Freelance designer:</p>
                        <p className='text-lg  '>Last year I started collaborated with a print shop and managed all design processes, dealing directly with end clients: from briefing, sketches, to final artwork for printing, etc.</p>
                    </div>
                    <div className="col-span-2 text-xl text-slate-900">
                        <p className='mt-1 text-sm md:text-lg text-right capitalize'>jul 2022/ now</p>
                    </div>
                </div>

                <div className="col-span-full grid grid-cols-9 gap-4 text-slate-900">
                    <div className="col-span-7">
                        <p className='text-lg mb-2 font-semibold'>Web developer at KreativeWork:</p>
                        <p className='text-lg  '>I worked developing and maintaining web projects based on different CMS such as Wordpress and PrestaShop. I was also involved on marketing task such as creating social media content for clients, building email templates and managing e-mail marketing campaings using Mailchimp among many other things.</p>
                    </div>
                    <div className="col-span-2 text-slate-900">
                        <p className='mt-1 text-sm md:text-lg text-right capitalize'>jan 2021/ jul 2022</p>
                    </div>
                </div>

                <div className="col-span-full grid grid-cols-9 gap-4 text-slate-900">
                    <div className="col-span-7">
                        <p className='text-lg mb-2 font-semibold'>Other relevant experience:</p>
                        <p className='text-lg  '>I happen to have quite a diverse curriculum since I have worked in many jobs while studding.
                        My favorite experience was the year I spent as a teacher in a small academy, since working with teenagers and kids is so fun and fulfilling.
                        However, I think that the most valuable experience I got was as a salesperson working door to door. That job gave me a lot of resilience and communication skills.</p>
                    </div>
                </div>
            </div>
            <div className='aparece col-start-2 md:col-start-3 col-span-10 md:col-span-9 grid grid-cols-8 md:grid-cols-9 gap-4 gap-y-8 mt-6'>
                <h6 className="text-4xl font-bold sm:mb-5 col-span-full mt-5">Education</h6>
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