
import PrimaryButton from '../../Components/PrimaryButton/Button'
import Container from '../../Components/Container/Container';

const About = () => {

  
  return (
    <>
    
  <Container black={false} >
    <section className='About section' id='About'>
    <div className="About__img">
    <svg className='About__blob' viewBox="0 0 550 592" fill="none" xmlns="http://www.w3.org/2000/svg">
     <mask id="maskBorder" mask-type="alpha">
      <path d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 
      171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 
      448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 
      270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 
      439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z" fill="black"/>
      </mask>
       <g mask="url(#maskBorder)">
      <rect x="37" width="476" height="630" fill="url(#pattern2)"/>
      
      <path d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 
      192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 
      580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 
      40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 
      175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z" stroke="black" stroke-width="10"/>
      </g>

      <rect x="37" width="476" height="300" fill="url(#pattern3)"/>

      <defs>
      <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
         <use href="#imageBorder" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"/>
      </pattern>

      <pattern id="pattern3" patternContentUnits="objectBoundingBox"    width="1" height="1">
         <use href="#imageBorder" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"/>
      </pattern>

      {/* <!-- Insert your profile (recommended size: 640 x 940) --> */}
      <image className = "About__img--profile "id="imageBorder" width="640" height="940" href="../../../public/img/photo_٢٠٢٤-٠٨-١٢_٠٠-٣٧-٢٠-removebg-preview.png"/>
       </defs>
    </svg>
    </div>
    <div className="About__data">
      <div className="About__data--header">
        <span className='second-title'>My </span>
        <span className='second-sub-title'> Intro</span>
      </div>
      <div className="About__data--title">
        <span className="title">About Me</span>
      </div>
      <div className="About__data--discrebtion">
        <p>
         As a junior Frontend developer,I possess an impressive arsenal of skills in HTML ,CSS,Bootstrap,javaScript React and Sass ,I excel in designing and maintaining responsive websites that offer a smooth user expeiance,My expertise lies in crafting dynamic ,engaging interfaces throw writing clean and optimized code and utilizing cutting-edge development tools and techniques.
        </p>
      </div>
      <div className="About__data--button">
        <a href="#Contact">
        <PrimaryButton >Contact Me</PrimaryButton>
        </a>
      </div>     
    </div>
    </section>
  </Container>


  <Container black={true}>   
    <section className='skills'>
      <div className="skills__describtion">
        <div className="skills__describtion--header">
          <span className="second-title">Favorite </span>
          <span className="second-sub-title">Skills</span>
        </div>
        <div className="skills__describtion--title">
          <span className='title'>My Skills</span>
        </div>
        <div className="skills__describtion--info">
          <p>
          see fully what I have and perform , to develop the projects for you.

          </p>
        </div>
        <div className="skills__describtion--button">
            <a href="#Projects">
          <PrimaryButton>
            see Projects        
          </PrimaryButton>
            </a>
        </div>
      </div>
      <div className="skills__gall flex">
      <div className="skills__gallery">
      <span className="skills__gallery--skill">
        <span className="second-sub-title">01. </span>
        <span className="second-title">HTML & CSS</span>
      </span>
      <span className="skills__gallery--skill">
        <span className="second-sub-title">02. </span>
        <span className="second-title">JavaScript</span>
      </span>
      <span className="skills__gallery--skill">
        <span className="second-sub-title">03. </span>
        <span className="second-title">Bootstrap</span>
      </span>
      <span className="skills__gallery--skill">
        <span className="second-sub-title">04. </span>
        <span className="second-title">SCSS</span>
      </span>
      <span className="skills__gallery--skill">
        <span className="second-sub-title">05. </span>
        <span className="second-title">React</span>
      </span>
      <span className="skills__gallery--skill">
        <span className="second-sub-title">06. </span>
        <span className="second-title">Figma</span>
      </span>
      <span className="skills__gallery--skill">
        <span className="second-sub-title">07. </span>       
        <span className="second-title">Git&GitHub</span>
      </span>
      </div>
      </div>
      

    </section>
  </Container>
    </>
    
    

  )
}

export default About
