import React from 'react'

const Hero = () => {

    return (
    <section className="flex items-center min-h-screen z-40">
        <div id="hero" className="grid grid-cols-12 gap-4 w-full py-48 max-md:py-0">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-4 gap-y-8">
                <div className="col-span-8 text-white leading-normal text-4xl md:leading-normal md:text-5xl lg:leading-normal lg:text-6xl">
                    <span>Hi, this is </span><br /><span className="font-bold xl:text-9xl">Said <span className="break-keep">Sel&#8209;lam</span></span>

                    <p className="text-white">I'm a front-end developer and graphic designer based in Madrid.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero