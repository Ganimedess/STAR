import React from 'react'
import Ellipse from './Ellipse'
import Star from './Star'

const OverlayLong = ({appHeight}) => {

  const colors1 = { c1: "#8A817C", c2: "#bcb8b1", c3: "#f4f3ee", c4: "#e0afa0"}
  const colors2 = { c1: "#bbcea8", c2: "#e3d87e", c3: "#f0ec57", c4: "#748067"}
  const colors3 = { c1: "#fb9f89", c2: "#c4af9a", c3: "#81ae9d", c4: "#21a179"}

  const currentPalette = colors2

  return (
      <div id="overlay" className="fixed fixed w-full min-h-screen">
        <div className='parallax p-far static flex flex-wrap'>
          <Star size={48} top={75} left={35} color={currentPalette.c1} hid={true} />
          <Ellipse size={16} top={40} left={14} color={currentPalette.c3} hid={true} />
          <Ellipse size={28} top={70} left={52} color={currentPalette.c4} />
          <Ellipse size={30} top={30} left={4} color={currentPalette.c4} hid={true} />
          <Star size={22} top={25} left={80} color={currentPalette.c4} />
          <Star size={18} top={85} left={10} color={currentPalette.c4} />
          <Star size={28} top={65} left={85} color={currentPalette.c1} hid={true} />
          <Star size={24} top={10} left={30} color={currentPalette.c2} hid={true} />
          <Star size={26} top={90} left={76} color={currentPalette.c2} />
          {/* long part */}
          <Star size={24} top={130} left={25} color={currentPalette.c1} hid={true} />
          <Ellipse size={30} top={130} left={4} color={currentPalette.c3} />
          <Star size={22} top={125} left={80} color={currentPalette.c3} />
          <Ellipse size={16} top={140} left={14} color={currentPalette.c4} />
          <Star size={48} top={255} left={10} color={currentPalette.c4} />
          <Star size={48} top={175} left={15} color={currentPalette.c1} hid={true} />
          <Ellipse size={20} top={17} left={60} color={currentPalette.c3} hid={true} />
          <Ellipse size={16} top={140} left={14} color={currentPalette.c3} hid={true} />
          <Ellipse size={28} top={170} left={52} color={currentPalette.c4} />
          <Star size={22} top={225} left={98} color={currentPalette.c4} />
          <Star size={18} top={285} left={10} color={currentPalette.c4} />
          <Star size={28} top={265} left={85} color={currentPalette.c1} hid={true} />
          <Star size={24} top={250} left={89} color={currentPalette.c2} hid={true} />
          <Star size={26} top={190} left={76} color={currentPalette.c2} />


        </div>
        <div className='parallax p-mid static flex flex-wrap'>
        </div>
        <div className='parallax p-close static flex flex-wrap'>
          <Ellipse size={350} top={82} left={-4} color={currentPalette.c4} hid={true} />
          <Ellipse size={180} top={22} left={94} color={currentPalette.c2} />
          <Star size={100} top={-2} left={37} color={currentPalette.c4} />
          <Star size={100} top={90} left={66} color={currentPalette.c2} hid={true} />
          {/* long part */}
          <Ellipse size={110} top={130} left={46} color={currentPalette.c1} hid={true} />
          <Ellipse size={350} top={182} left={-4} color={currentPalette.c4} hid={true} />
          <Ellipse size={180} top={222} left={94} color={currentPalette.c2} />
          <Star size={90} top={180} left={79} color={currentPalette.c3} />
          <Star size={100} top={290} left={66} color={currentPalette.c2} hid={true} />

          <Ellipse size={120} top={517} left={5} color={currentPalette.c3} hid={true} />
          <Ellipse size={116} top={240} left={14} color={currentPalette.c3} hid={true} />
          <Ellipse size={128} top={270} left={52} color={currentPalette.c4} />
          <Ellipse size={130} top={330} left={4} color={currentPalette.c4} hid={true} />
          <Star size={122} top={325} left={80} color={currentPalette.c4} />
          <Star size={118} top={385} left={10} color={currentPalette.c4} />
          <Star size={128} top={465} left={85} color={currentPalette.c1} hid={true} />
          <Star size={124} top={440} left={-3} color={currentPalette.c2} hid={true} />
          <Star size={126} top={390} left={76} color={currentPalette.c2} />
        </div>
      </div>
  )
}

export default OverlayLong