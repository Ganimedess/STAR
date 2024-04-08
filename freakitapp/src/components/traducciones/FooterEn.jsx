import '../../App.css'
import { Link } from "react-router-dom";
import tiktok from '../../assets/images/iconos/tiktok.png'
import instagram from '../../assets/images/iconos/insta.png'
import gmail from '../../assets/images/iconos/mail.png'

const Footer = () => {
  return (
    <>
    <ul className="mt-12 lg:mt-32 flex items-center justify-between w-52 m-auto mb-5">
      <li className="upScaleOnHover2 h-fit"><a target="_blank" href="https://www.tiktok.com/@freakitapp" rel="noreferrer" className='py-3'><img src={tiktok} alt="tiktok" className="max-w-[35px] max-h-[35px]"/></a></li>
      <li className="upScaleOnHover2 h-fit"><a target="_blank" href="https://www.instagram.com/freakitapp/?hl=es" rel="noreferrer" className='py-3'><img src={instagram} alt="instagram" className="max-w-[35px] max-h-[35px]"/></a></li>
      <li className="upScaleOnHover2 h-fit"><a target="_blank" href="mailto:freakitapp@gmail.com" rel="noreferrer" className='py-3'><img src={gmail} alt="gmail" className="max-w-[35px] max-h-[35px]"/></a></li>
    </ul>
    <footer className="navbar bg-primary  text-white">
      <ul className="flex flex-wrap justify-center max-w-screen-lg m-auto my-5">
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/en/anime-characters">Anime characters</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/en/personalities">Personalities</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/en/faq">Frequently asked questions</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/en/help">Help</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/en/safety-tips">Safety tips</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/en/community-rules">Community rules</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/en/terms-and-conditions">Terms and conditions of use</Link></li>
        <li className='hover:text-blueF leading-10 mx-5'><Link to="/en/privacy-policy">Privacy policy</Link></li>
      </ul>
    </footer>
    </>
  )
}

export default Footer