import React from 'react'
import ProjectPage from './ProjectPage'
import screen0 from '../assets/sm0.png'
import screen1 from '../assets/sm1.png'

const Centromc = () => {


  return (
    <ProjectPage
    title="Mímate y Cuídate"
    subtitle="Luxury beauty centre"
    description="Crafting the image of a luxury business was a really pleasant experience. The focal point of the design process was to convey the image of a natural beauty brand with organic cosmetics. The biggest challenge was to put the site together without any images of the place since it's just launching."
    link="https://centromc.com/"
    type="Web design and development"
    logic="Wordpress"
    styles="Block editor + custom CSS"
    nextProject='freakit!'
    >
      <img loading='lazy' src={screen0} alt="" />
      <img loading='lazy' src={screen1} alt="" />
    </ProjectPage>

  )
}

export default Centromc