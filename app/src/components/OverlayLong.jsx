import React from 'react'
import Ellipse from './Ellipse'
import Star from './Star'

const OverlayLong = ({appHeight}) => {

  const colors1 = { hot: "#FF99C8", cold: "#DBFEB8", light: "#F37748", dark: "#32292F"}
  const colors2 = { hot: "#D44D5C", cold: "#C2AFF0", light: "#D0E3C9", dark: "#1F7A8C"}
  const colors3 = { hot: "#A06B9A", cold: "#51D6FF", light: "#37FF8B", dark: "#522B29"}

  const currentPalette = colors3

  return (
      <div id="overlay" className="fixed fixed w-full min-h-screen">
        <div className='parallax p-far static flex flex-wrap'>
          <Star size={48} top={75} left={35} color={currentPalette.hot} hid={true} />
          <Ellipse size={20} top={7} left={60} color={currentPalette.light} hid={true} />
          <Ellipse size={16} top={40} left={14} color={currentPalette.light} hid={true} />
          <Ellipse size={28} top={70} left={52} color={currentPalette.dark} />
          <Ellipse size={30} top={30} left={4} color={currentPalette.dark} hid={true} />
          <Star size={22} top={25} left={80} color={currentPalette.dark} />
          <Star size={18} top={85} left={10} color={currentPalette.dark} />
          <Star size={28} top={65} left={85} color={currentPalette.hot} hid={true} />
          <Star size={24} top={20} left={30} color={currentPalette.cold} hid={true} />
          <Star size={26} top={90} left={76} color={currentPalette.cold} />
          {/* long part */}
          <Star size={24} top={120} left={25} color={currentPalette.hot} hid={true} />
          <Ellipse size={30} top={130} left={4} color={currentPalette.light} />
          <Star size={22} top={125} left={80} color={currentPalette.light} />
          <Ellipse size={16} top={140} left={14} color={currentPalette.dark} />
          <Star size={48} top={155} left={35} color={currentPalette.dark} />


        </div>
        <div className='parallax p-mid static flex flex-wrap'>
        </div>
        <div className='parallax p-close static flex flex-wrap'>
          <Ellipse size={350} top={82} left={-4} color={currentPalette.dark} hid={true} />
          <Star size={100} top={-2} left={37} color={currentPalette.dark} />
          <Star size={100} top={90} left={66} color={currentPalette.cold} hid={true} />
          <Ellipse size={180} top={22} left={94} color={currentPalette.cold} />
          {/* long part */}
          <Ellipse size={110} top={130} left={46} color={currentPalette.hot} hid={true} />
          <Star size={90} top={180} left={79} color={currentPalette.light} />
        </div>
      </div>
  )
}

export default OverlayLong