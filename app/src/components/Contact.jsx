import React from 'react'
import behance from '../assets/behance.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';

const Contact = () => {
  return (
    <section id="contact" className="h-100 flex items-center my-64">
        <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-4 gap-y-9">
                <div className="col-span-full">
                    <h6 className="text-6xl font-bold">Let's talk</h6>            </div>
                <div className="col-span-full md:col-span-3">
                    <p className="text-xl text-white">I'm open for hiring and also for collaborating!</p>
                </div>
                <div className="col-span-full md:col-span-3 md:col-start-5">
                    <p className="text-xl text-white">Email me at:</p>
                    <a href="mailto:ssp.mays@gmail.com" className="text-xl">ssp.mays@gmail.com</a>
                    <div className="flex w-full justify-start mt-8">
                        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/said-sel-lam-palomino-8b747960/" className='me-5 biggie'><img src={linkedin} alt="linkedin logo" /></a>
                        <a target="_blank" rel='noreferrer' href="https://www.behance.net/sspmays270e" className='me-5 biggie'><img src={behance} alt="behance logo" /></a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/Ganimedess" className='me-5 biggie'><img src={github} alt="github logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact