import React from 'react'

const Hero = () => {

    return (
    <section className="flex items-center min-h-screen z-40">
        <div id="hero" className="grid grid-cols-12 gap-4 w-full">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-4 gap-y-8">
                <div className="col-span-full lg:col-span-3">
                    <p className="text-xl text-white">Hi, my name is</p>
                </div>
                <h1 className="col-span-full text-6xl sm:text-6xl md:text-8xl lg:text-center font-bold break-all"><span className="break-keep">Said</span> <span className="break-keep">Sel&#8209;lam</span></h1>
                <div className="col-span-full sm:col-span-4 lg:col-span-3">
                    <p className="text-xl text-white">I'm a front-end developer and graphic designer based in Madrid.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero