import { FaGithub } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer__logo">
      <h4 className="footer__logo--name">
        Belal 
        <span > Mustafa</span>
      </h4>
      <div className="footer__logo--subtitute">
        <p>Fronend web developer</p>
      </div>
      </div>
      <div className="footer__contact">
      <a href=""><FaGithub /></a>
      <a href=""><FaDribbble /></a>
      <a href=""><PiLinkedinLogoBold /></a>
      </div>
      <div className="footer__copyRight">
        <small>&copy; Copyright .All rights reserved<br/> 
          <span>
          for <a href="">Belal Mustafa</a>
          </span>
        </small>
      </div>
  </div>
  <a href="#" className="scroll-up">
    <FaArrowUp />
  </a>
  </>

  )
}

export default Footer
