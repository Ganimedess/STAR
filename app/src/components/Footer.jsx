import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900/90 text-gray-400 pb-10">
        <div className="max-w-7xl grid grid-cols-12 gap-4 mx-auto">
            <div className="col-span-full flex justify-between mx-auto px-5 min-[1300px]:px-0 py-5 max-w-7xl text-xs sm:text-base w-full text-slate-500">
                <div className="text-xs md:text-base flex flex-col justify-between">
                    <p className='my-2'>Said Sel-lam<br /><a href="mailto:ssp.mays@gmail.com" className="hover:underline">ssp.mays@gmail.com</a></p>
                    <p className='my-2'>Designed and developed by me</p>
                </div>
                <div className="text-xs md:text-base text-right">
                    Social
                    <ul>
                        <a target="_blank" rel='noreferrer' href="https://www.behance.net/sspmays270e"><li className='my-2 hover:underline'>Behance</li></a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/Ganimedess"><li className='my-2 hover:underline'>Github</li></a>
                        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/said-sel-lam-palomino-8b747960/"><li className='my-2 hover:underline'>Linkedin</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer