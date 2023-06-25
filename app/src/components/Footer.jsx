import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900/90 text-gray-400 py-7">
        <div className="max-w-7xl grid grid-cols-12 gap-4 mx-auto">
            <div className="col-span-full flex justify-between mx-auto px-5 xl:px-0 py-5 max-w-7xl text-xs sm:text-base w-full text-slate-500">
                <div className="text-xs md:text-base flex flex-col justify-between">
                    <p className='my-2'>Said Sel-lam<br />ssp.mays@gmail.com</p>
                    <p className='my-2'>Designed and developed by me</p>
                </div>
                <div className="text-xs md:text-base text-right">
                    social
                    <ul>
                        <li className='my-2'>Behance</li>
                        <li className='my-2'>Github</li>
                        <li className='my-2'>Linkedin</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer