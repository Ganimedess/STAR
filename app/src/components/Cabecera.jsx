import React from 'react';
import foto from  '../assets/retrato.jpg';
import resume from '../assets/Resume-Said.pdf';

const About = () => {
  return (
    <section id="about" className="flex flex-wrap items-center mb-7 mt-16">
        <div className="aparece grid grid-cols-12 gap-4 w-full">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-9 grid grid-cols-9 gap-4 gap-y-9">
                <div className="col-span-full lg:col-span-4">
                    <h1 className="text-6xl max-md:text-4xl mb-8">Hello! I am<br /><span className='text-purpura'>Said Sel-lam Palomino</span>.
                    <br />I’m a web developer and graphic designer based in Madrid.</h1>
                    <p className="text-lg">I am a creative and versatile professional with a degree in graphic design and a passion for front-end development. With hands-on experience in React and WordPress, I love crafting visually captivating and user-friendly digital experiences.
                    </p><p className="text-lg mt-3">
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
                <div className="col-span-full lg:col-start-6 lg:col-span-4 mt-6 lg:mt-0 max-h-[80vh] overflow-hidden">
                    <img className="foto-cabecera" src={foto} alt="self portrait" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About