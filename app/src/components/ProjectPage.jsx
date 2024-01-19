//import { Description } from "@mui/icons-material";
import React from "react";
import {Link} from 'react-router-dom'

const ProjectPage = ({children, title, subtitle, description, link, type, logic, styles, nextProject}) => {
    let gotop = () => {
        document.querySelector('.App').scroll(0,0)
    }

    return(
        <>
      <section id='proyect' className="min-h-[50vh] pt-24 pb-12 flex items-center top-0 sticky">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-8 col-start-2 md:col-start-3">
              <h1 className="text-6xl font-bold">{title}</h1>
          </div>

          <div className="col-span-10 md:col-span-4 col-start-2 md:col-start-3 mb-5 md:mb-12">
            <h2 className="text-xl italic mb-10">{subtitle}</h2>
            <span className='text-slate-900'>Description:</span>
            <p className="text-xl">{description}</p>
          </div>
          <div className="col-span-10 md:col-span-4 col-start-2 md:col-start-8 mb-12">
          <span className='text-slate-900'>Type:</span>
            <p className="text-xl mb-5">{type}</p>

            <span className='text-slate-900'>logic:</span>
            <p className="text-xl mb-5">{logic}</p>

            <span className='text-slate-900'>styles:</span>
            <p className="text-xl">{styles}</p>
          </div>
        </div>
      </section>
      <div className="w-full bg-slate-900 pb-12 relative">

        <nav className="grid grid-cols-2 items-center relative sticky top-[40px] md:top-0 pl-9 pr-5 pt-8">
          <a rel='noreferrer' target='_blank' href={link} className="md:justify-self-end md:mr-16 z-10">
            <button className="biggie text-xl px-4 py-1 rounded-lg bg-white hover:bg-verde text-xs sm:text-lg md:text-xl">Visit →</button>
          </a>
          <Link to={`/work/${nextProject}`} onClick={gotop} className="max-md:justify-self-end md:ml-8 z-10">
            <span className='biggie text-xl text-slate-900 bg-white hover:bg-verde  p-1 px-2 inline-block text-xs sm:text-lg md:text-xl'>Next proyect →</span>
          </Link>
          <div className="overlayTop max-md:mt-[-40px]"></div>
        </nav>

        <div className='my-12 flex flex-col items-center mx-auto max-w-[1200px]'>
          {children}
        </div>
      </div>
    </>
    )
}

export default ProjectPage
    /*
    <ProjectPage
    title=""
    subtitle=""
    description=""
    link=""
    type=""
    logic=""
    styles=""
    >

    const infoProjects = {projects : {
    'centromc' : {
      title : 'Mímate y Cuídate',
      subtitle : "Luxury beauty centre",
      description : "Crafting the image of a luxury business was a really pleasant experience. The focal point of the design process was to convey the image of a natural beauty brand with organic cosmetics. The biggest challenge was to put the site together without any images of the place since it's just launching.",
      link : "https://centromc.com/",
      type : "Web design and development",
      logic : "Wordpress",
      styles : "Block editor + custom CSS",
    }},
    'freakit!' : {
      title : "Freakit!",
      subtitle : "Dating app for otakus",
      description : "This is a dating app for otakus with a unique feature. When you create your profile, you take a personality test, and you are matched with an anime character who is similar to you. This way, Freakit! focuses on personality and shared interests rather than physical appearance.",
      link : "https://www.freakitapp.es",
      type : "Web design and development",
      logic : "React",
      styles : "Tailwind CSS + daisyUI",
    },
    'elroble' : {
      title : "El Roble",
      subtitle : "Holistic therapy centre",
      description : "'El Roble' is a non-profit association focused on complementary therapies and natural medicine. In this web project, they aimed to promote the association, its philosophy, and the activities they carry out.",
      link : "https://elroble.uno/",
      type : "Web design and development",
      logic : "JavaScript (vanilla)",
      styles : "less",
    },
  }
    */