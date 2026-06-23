import "./Hero.css";
import heroLeftImg from "../../assets/Left.png";
import { MdOutlineEmail } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
import logo from '../../assets/Logo-grey.png'
import logo1 from '../../assets/Logo-grey (1).png'
import logo2 from '../../assets/Logo-grey (2).png'
import logo3 from '../../assets/Logo-grey (3).png'

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-left">
        <h1 className='hero__title'>Team projects, done well</h1>
        <p className='hero__subtitle'>The only platform that gives your team all the tools needed to work together on their awesome projects. </p>
        <form className='forma'>
          <div className='forma-input'>
            <MdOutlineEmail className='icon'/>
            <input placeholder='Enter work email' type="text" />
          </div>
          <button className='forma-btn'>Sign Up Free <TiArrowRight /></button>
        </form>
        <div className="hero__logos">
          <img src={logo} alt="" />
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroLeftImg} alt="" />
      </div>
    </div>
  )
}

export default Hero;