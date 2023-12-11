import React from 'react'

const Ellipse = ({size = 50, color = '#fff', top = 0, left = 0, hid = false}) => {
    const STROKE = 50

    const radius = size/2
    const stroke = 4 + Math.floor(radius/STROKE) * 2
    const center = radius + stroke/2
    const diameter = center * 2
    const ry = radius * (1 + Math.random()) / 2
    let hidn = hid ? 'max-lg:hidden ellipse' : ' ellipse'
    let dlay = Math.random()*2000 + 1000

    return (
    <svg className={hidn} version="1.1" width={diameter} height={diameter} xmlns="http://www.w3.org/2000/svg" style={{transformOrigin: 'center', transform: `rotate(${Math.random()}turn)`, position: 'fixed', top: `${top}%`, left: `${left}%`, animationDelay: `${dlay}ms`}}>
        <ellipse cx={center} cy={center} rx={radius} ry={ry} stroke={color} fill="transparent" strokeWidth={stroke}/>
    </svg>
  )
}

export default Ellipse