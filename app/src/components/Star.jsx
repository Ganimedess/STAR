import React from 'react'

const Star = ({size = 50, color = '#fff', top = 0, left = 0, hid = false}) => {
  const STROKE = 50
  const stroke = 4 + Math.floor(size/STROKE)
  let hidn = hid ? 'max-lg:hidden' : ''

  return (
    <svg className={hidn} version="1.1" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{transformOrigin: 'center', transform: `rotate(${Math.random()}turn)`, position: 'fixed', top: `${top}%`, left: `${left}%`}}>
        <line x1={size/2} x2={size/2} y1="0" y2={size} stroke={color} strokeWidth={stroke}/>
        <line x1="0" x2={size} y1={size/2} y2={size/2} stroke={color} strokeWidth={stroke}/>
        <line x1={size*.15} x2={size*.85} y1={size*.15} y2={size*.85} stroke={color} strokeWidth={stroke}/>
        <line x1={size*.15} x2={size*.85} y1={size*.85} y2={size*.15} stroke={color} strokeWidth={stroke}/>
    </svg>
  )
}

export default Star