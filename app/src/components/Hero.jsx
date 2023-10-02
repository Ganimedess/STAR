import React from 'react'

const Hero = () => {

    return (
    <section className="flex items-center min-h-[95vh] z-40">
        <div id="hero" className="grid grid-cols-12 gap-4 w-full text-slate-900">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-4 gap-y-8 pt-10">
                <h1 className="col-span-8 leading-normal text-4xl md:leading-normal md:text-5xl lg:leading-normal lg:text-6xl">
                    <span>Hi, this is </span><br /><span className="font-bold text-6xl md:text-7xl xl:text-9xl fontCool text-slate-900">Said <span className="break-keep fontCool text-slate-900">Sel&#8209;lam</span></span>

                    <p className="">I'm a web developer and graphic designer based in Madrid.</p>
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Hero