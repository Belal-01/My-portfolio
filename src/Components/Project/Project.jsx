import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div className='project'>
      <video src="../../../public/img/draft_27415218820_1699774159_032dbd55-0b91-4cad-aee5-ef2ccdef612c.mp4" width={"300px"} height={'250px'} controls autoPlay muted>
      </video>
      <div className="project__review">
        <div className="project__review--header">
          <span>web</span>
        </div>
        <div className="project__review--title">
          <span className="second-title">
            Modern Websit
          </span>
        </div>
        <div className="project__review--viewer">
          <span className="">
            View demo 
            <a className="project__review--viewer--link-icon" href="">
              <FaExternalLinkAlt />
            </a>
          </span>
        </div>
      </div>      
    </div>
  )
}

export default Project
