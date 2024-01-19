import React from 'react'
import ProjectPage from './ProjectPage'
import screen0 from '../assets/sf0.png'
import screen1 from '../assets/sf1.png'
import screen2 from '../assets/sf2.png'
import screen3 from '../assets/sf3.png'
import screen4 from '../assets/sf4.png'
import screen5 from '../assets/sf5.png'
import screen6 from '../assets/sf6.png'
import screen7 from '../assets/sf7.png'

const FreakitPage = () => {

  return (

    <ProjectPage
    title="Freakit!"
    subtitle="Dating app for otakus"
    description="This is a dating app for otakus with a unique feature. When you create your profile, you take a personality test, and you are matched with an anime character who is similar to you. This way, Freakit! focuses on personality and shared interests rather than physical appearance."
    link="https://www.freakitapp.es"
    type="Web design and development"
    logic="React"
    styles="Tailwind CSS + daisyUI"
    nextProject='elRoble'
    >
      <img loading='lazy' src={screen0} alt="freakit mockup" />
      <img loading='lazy' src={screen1} alt="freakit web hero" />
      <img loading='lazy' src={screen2} alt="freakit web mockup" />
      <img loading='lazy' src={screen3} alt="freakit web arguments" />
      <img loading='lazy' src={screen4} alt="freakit web video" />
      <img loading='lazy' src={screen5} alt="freakit web carousel" />
      <img loading='lazy' src={screen6} alt="freakit web team" />
      <img loading='lazy' src={screen7} alt="freakit web media" />


    </ProjectPage>

  )
}

export default FreakitPage