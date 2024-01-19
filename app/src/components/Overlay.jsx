import React from 'react'
import Ellipse from './Ellipse'
import Star from './Star' 

const Overlay = ({appHeight}) => {

  const colors1 = { ve: "#FF99C8", am: "#DBFEB8", pu: "#F37748", ro: "#32292F"}
  const colors2 = { ve: "#D44D5C", am: "#C2AFF0", pu: "#D0E3C9", ro: "#1F7A8C"}
  const colors3 = { ve: "#A06B9A", am: "#51D6FF", pu: "#37FF8B", ro: "#522B29"}
  const colors5 = { ve: "#2A9D8E", am: "#E9c46B", pu: "#787cef", ro: "#E66F51"}
  const colors6 = { ve: "#A24502", am: "#CD8A39", pu: "#595D2B", ro: "#1D2A10"}

  const currentPalette = colors5

  return (
      <div id="overlay" className="fixed fixed w-full min-h-screen">
        <div className='parallax p-far static flex flex-wrap'>
          <Star size={48} top={75} left={35} color={currentPalette.ve} hid={true} />
          <Ellipse size={20} top={7} left={60} color={currentPalette.pu} hid={true} />
          <Ellipse size={16} top={40} left={14} color={currentPalette.pu} hid={true} />
          <Ellipse size={28} top={70} left={52} color={currentPalette.ro} />
          <Ellipse size={30} top={30} left={4} color={currentPalette.ro} />
          <Star size={22} top={25} left={80} color={currentPalette.ro} />
          <Star size={18} top={85} left={10} color={currentPalette.ro} />
          <Star size={28} top={65} left={85} color={currentPalette.ve} />
          <Star size={24} top={20} left={30} color={currentPalette.am} hid={true} />
          <Star size={26} top={90} left={76} color={currentPalette.am} />
        </div>
        <div className='parallax p-mid static flex flex-wrap'>
        </div>
        <div className='parallax p-close static flex flex-wrap'>
          <Star size={100} top={-2} left={37} color={currentPalette.am} />
          <Star size={100} top={90} left={66} color={currentPalette.ve} />
          <Ellipse size={350} top={82} left={-4} color={currentPalette.ro} />
          <Ellipse size={180} top={22} left={94} color={currentPalette.am} />
        </div>
      </div>
  )
}

export default Overlay