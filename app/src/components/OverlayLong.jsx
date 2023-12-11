import React from 'react'
import Ellipse from './Ellipse'
import Star from './Star'

const OverlayLong = ({appHeight}) => {

  const colors1 = { ve: "#8A817C", am: "#bcb8b1", pu: "#f4f3ee", ro: "#e0afa0"}
  const colors3 = { ve: "#fb9f89", am: "#c4af9a", pu: "#81ae9d", ro: "#21a179"}
  const colors4 = { ve: "#3397B1", am: "#D0D8CD", pu: "#E75D5B", ro: "#EBB121"}
  const colors5 = { ve: "#2A9D8E", am: "#E9c46B", pu: "#787cef", ro: "#E66F51"}
  const colors6 = { ve: "#A24502", am: "#CD8A39", pu: "#595D2B", ro: "#1D2A10"}

  const currentPalette = colors5

  return (
      <div id="overlay" className="fixed fixed w-full min-h-screen">
        <div className='parallax p-far static flex flex-wrap opacity-70'>
          <Star size={48} top={83} left={35} color={currentPalette.am} hid={true} />
          <Ellipse size={28} top={75} left={52} color={currentPalette.pu} />
          <Ellipse size={30} top={30} left={4} color={currentPalette.ro} hid={true} />
          <Star size={22} top={25} left={80} color={currentPalette.ro} />
          <Star size={18} top={65} left={10} color={currentPalette.ro} />
          <Star size={28} top={65} left={85} color={currentPalette.pu} hid={true} />
          <Star size={24} top={10} left={30} color={currentPalette.ve}  />
          <Star size={26} top={90} left={76} color={currentPalette.am} />
          {/* long part */}
          <Star size={24} top={140} left={96} color={currentPalette.ve} hid={true} />
          <Ellipse size={30} top={130} left={4} color={currentPalette.pu} />
          <Star size={22} top={125} left={80} color={currentPalette.pu} />
          <Ellipse size={16} top={140} left={14} color={currentPalette.ro} />
          <Star size={48} top={255} left={10} color={currentPalette.ro} />
          <Star size={48} top={175} left={15} color={currentPalette.ve} />
          <Ellipse size={20} top={17} left={60} color={currentPalette.pu} hid={true} />
          <Ellipse size={28} top={170} left={52} color={currentPalette.ro} />
          <Star size={22} top={225} left={98} color={currentPalette.ro} />
          <Star size={18} top={285} left={10} color={currentPalette.ro} />
          <Star size={28} top={265} left={85} color={currentPalette.ve} />
          <Star size={24} top={250} left={89} color={currentPalette.am} hid={true} />
          <Star size={26} top={190} left={76} color={currentPalette.am} />


        </div>
        <div className='parallax p-close static flex flex-wrap opacity-90'>
          <Ellipse size={250} top={82} left={-4} color={currentPalette.pu} hid={true} />
          <Ellipse size={180} top={22} left={94} color={currentPalette.am} />
          <Star size={100} top={-2} left={87} color={currentPalette.ro} />
          <Star size={100} top={90} left={66} color={currentPalette.ve} />
          {/* long part */}
          <Ellipse size={110} top={130} left={24} color={currentPalette.ro} hid={true} />
          <Ellipse size={180} top={222} left={94} color={currentPalette.am} />
          <Star size={100} top={290} left={66} color={currentPalette.am} hid={true} />

          <Ellipse size={120} top={517} left={5} color={currentPalette.pu} hid={true} />
          <Ellipse size={116} top={240} left={14} color={currentPalette.am} hid={true} />
          <Ellipse size={128} top={275} left={62} color={currentPalette.pu} hid={true} />
          <Ellipse size={130} top={340} left={4} color={currentPalette.am} hid={true} />
          <Star size={122} top={335} left={80} color={currentPalette.ro} hid={true} />
          <Star size={118} top={415} left={10} color={currentPalette.ro}  hid={true} />
          <Star size={128} top={465} left={85} color={currentPalette.ve} hid={true} />
          <Star size={124} top={440} left={-3} color={currentPalette.am} hid={true} />
          <Star size={126} top={390} left={76} color={currentPalette.am} />
        </div>
      </div>
  )
}

export default OverlayLong