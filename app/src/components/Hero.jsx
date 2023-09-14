import React from 'react'

const Hero = () => {

    return (
    <section className="flex items-center min-h-[95vh] z-40">
        <div id="hero" className="grid grid-cols-12 gap-4 w-full py-48 max-md:py-0 text-slate-400">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-4 gap-y-8">
                <div className="col-span-8 leading-normal text-4xl md:leading-normal md:text-5xl lg:leading-normal lg:text-6xl">
                    <span>Hi, this is </span><br /><span className="font-bold xl:text-9xl fontCool text-white">Said <span className="break-keep fontCool text-white">Sel&#8209;lam</span></span>

                    <p className="">I'm a web developer and graphic designer based in Madrid.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero