import React from "react"
import {Link} from "react-router-dom"
import {useState} from 'react'

const ProjectCard = ({thumbnail, link , title , description}) => {
    function scrollTop() {
        document.querySelector(".App").scrollTo(0,0);
    }
    const [eyeOpen, setEye] = useState(true);

    const closeEye = () => {
        setEye(false)
    }
    const openEye = () => {
        setEye(true)
    }

    return(
    <Link onClick={scrollTop} to={link} className={`${eyeOpen ? 'eyeOpen' : 'eyeClosed'} round10 project text-slate-900 col-span-4 bg-[#ffffffe0] hover:bg-white overflow-hidden`} onMouseDown={closeEye} onMouseUp={openEye}>
        <div className="items-stretch flex flex-col h-full">
            <div className="col-span-full md:col-span-6 flex flex-col justify-center md:text-left p-2 md:p-5 md:px-7">
                <h6 className="text-2xl md:text-4xl font-bold block fontCool">{title}</h6>
                <p className="mt-3 text-md md:text-2xl mim-md:pt-8">{description}</p>
            </div>
            <div className='col-span-full hidden md:block h-full'>
                <img className='object-cover h-full w-full' src={thumbnail} alt="Mímate y cuídate thumbnail" />
            </div>
        </div>
    </Link>
    )
}

export default ProjectCard