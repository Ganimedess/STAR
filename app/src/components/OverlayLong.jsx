import React from 'react'
import Ellipse from './Ellipse'
import Star from './Star'

const OverlayLong = ({appHeight}) => {

  const colors2 = { nRed: "#D44D5C", nBlue: "#51aeff", nYellow: "#DBFEB8", nPurple: "#8b58be"}
  const colors3 = { nRed: "#A06B9A", nBlue: "#51D6FF", nYellow: "#37FF8B", nPurple: "#522B29"}
  const colors1 = { nRed: "#FF99C8", nBlue: "#DBFEB8", nYellow: "#F37748", nPurple: "#32292F"}

  const currentPalette = colors2

  return (
      <div id="overlay" className="fixed fixed w-full min-h-screen">
        <div className='parallax p-far static flex flex-wrap'>
          <Star size={48} top={75} left={35} color={currentPalette.nRed} hid={true} />
          <Ellipse size={20} top={7} left={60} color={currentPalette.nYellow} hid={true} />
          <Ellipse size={16} top={40} left={14} color={currentPalette.nYellow} hid={true} />
          <Ellipse size={28} top={70} left={52} color={currentPalette.nPurple} />
          <Ellipse size={30} top={30} left={4} color={currentPalette.nPurple} hid={true} />
          <Star size={22} top={25} left={80} color={currentPalette.nPurple} />
          <Star size={18} top={85} left={10} color={currentPalette.nPurple} />
          <Star size={28} top={65} left={85} color={currentPalette.nRed} hid={true} />
          <Star size={24} top={20} left={30} color={currentPalette.nBlue} hid={true} />
          <Star size={26} top={90} left={76} color={currentPalette.nBlue} />
          {/* long part */}
          <Star size={24} top={120} left={25} color={currentPalette.nRed} hid={true} />
          <Ellipse size={30} top={130} left={4} color={currentPalette.nYellow} />
          <Star size={22} top={125} left={80} color={currentPalette.nYellow} />
          <Ellipse size={16} top={140} left={14} color={currentPalette.nPurple} />
          <Star size={48} top={155} left={35} color={currentPalette.nPurple} />
          <Star size={48} top={175} left={35} color={currentPalette.nRed} hid={true} />
          <Ellipse size={20} top={117} left={60} color={currentPalette.nYellow} hid={true} />
          <Ellipse size={16} top={140} left={14} color={currentPalette.nYellow} hid={true} />
          <Ellipse size={28} top={170} left={52} color={currentPalette.nPurple} />
          <Ellipse size={30} top={130} left={4} color={currentPalette.nPurple} hid={true} />
          <Star size={22} top={225} left={80} color={currentPalette.nPurple} />
          <Star size={18} top={285} left={10} color={currentPalette.nPurple} />
          <Star size={28} top={265} left={85} color={currentPalette.nRed} hid={true} />
          <Star size={24} top={220} left={30} color={currentPalette.nBlue} hid={true} />
          <Star size={26} top={190} left={76} color={currentPalette.nBlue} />


        </div>
        <div className='parallax p-mid static flex flex-wrap'>
        </div>
        <div className='parallax p-close static flex flex-wrap'>
          <Ellipse size={350} top={82} left={-4} color={currentPalette.nPurple} hid={true} />
          <Ellipse size={180} top={22} left={94} color={currentPalette.nBlue} />
          <Star size={100} top={-2} left={37} color={currentPalette.nPurple} />
          <Star size={100} top={90} left={66} color={currentPalette.nBlue} hid={true} />
          {/* long part */}
          <Ellipse size={110} top={130} left={46} color={currentPalette.nRed} hid={true} />
          <Ellipse size={350} top={182} left={-4} color={currentPalette.nPurple} hid={true} />
          <Ellipse size={180} top={222} left={94} color={currentPalette.nBlue} />
          <Star size={90} top={180} left={79} color={currentPalette.nYellow} />
          <Star size={100} top={212} left={37} color={currentPalette.nPurple} />
          <Star size={100} top={290} left={66} color={currentPalette.nBlue} hid={true} />

          <Ellipse size={120} top={517} left={60} color={currentPalette.nYellow} hid={true} />
          <Ellipse size={116} top={240} left={14} color={currentPalette.nYellow} hid={true} />
          <Ellipse size={128} top={270} left={52} color={currentPalette.nPurple} />
          <Ellipse size={130} top={330} left={4} color={currentPalette.nPurple} hid={true} />
          <Star size={122} top={325} left={80} color={currentPalette.nPurple} />
          <Star size={118} top={385} left={10} color={currentPalette.nPurple} />
          <Star size={128} top={365} left={85} color={currentPalette.nRed} hid={true} />
          <Star size={124} top={420} left={30} color={currentPalette.nBlue} hid={true} />
          <Star size={126} top={390} left={76} color={currentPalette.nBlue} />
        </div>
      </div>
  )
}

export default OverlayLong