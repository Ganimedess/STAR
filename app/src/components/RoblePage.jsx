import React from 'react'
import screen0 from '../assets/sr0.jpg'
import screen1 from '../assets/sr1.png'
import screen2 from '../assets/sr2.png'
import screen3 from '../assets/sr3.png'
import ProjectPage from './ProjectPage'

const RoblePage = () => {

  return (
    <>
    <ProjectPage
    title="El Roble"
    subtitle="Holistic therapy centre"
    description="'El Roble' is a non-profit association focused on complementary therapies and natural medicine. In this web project, they aimed to promote the association, its philosophy, and the activities they carry out."
    link="https://elroble.uno/"
    type="Web design and development"
    logic="JavaScript (vanilla)"
    styles="less"
    nextProject='centromc'
    >

          <img loading='lazy' src={screen0} alt="roble mockup" />
          <img loading='lazy' src={screen1} alt="roble web part1" />
          <img loading='lazy' src={screen2} alt="roble web part2" />
          <img loading='lazy' src={screen3} alt="roble web part3" />

    </ProjectPage>
    </>
  )
}

export default RoblePage