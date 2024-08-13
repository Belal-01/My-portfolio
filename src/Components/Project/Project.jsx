import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div className='project'>
      <img src="../../../public/img/project-img-1.jpg" alt="" />
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
