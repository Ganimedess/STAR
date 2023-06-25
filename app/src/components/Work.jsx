import React from 'react'

const Work = () => {
  return (
    <section className="h-100 flex items-center min-h-screen">
        <div id="work" className="grid grid-cols-12 gap-4 w-full">
            <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 grid grid-cols-8 gap-4 gap-y-9">
                <div className="col-span-full lg:col-span-3">
                    <p className="text-xl text-slate-400">Selected projects:</p>
                </div>
                <div className="text-left md:text-center col-span-full grid gap-y-12 mt-5">
                    <div className="flex flex-col md:flex-row justify-center items-start md:items-end flex-wrap">
                        <h6 className="text-5xl md:text-6xl font-bold block">Freakit!</h6>
                        <span className="mt-3 md:mt-0 text-xl md:ml-3">Web design for a dating app</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-start md:items-end flex-wrap">
                        <h6 className="text-5xl md:text-6xl font-bold block">El Roble</h6>
                        <span className="mt-3 md:mt-0 text-xl md:ml-3">Alternative therapy center website</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work