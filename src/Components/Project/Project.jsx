import React, { useEffect } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = (props) => {
  useEffect(()=>{
  const projectVideo = document.querySelectorAll('.project-video');
  console.log(projectVideo)
  projectVideo.forEach((video)=>{
    video.addEventListener('ended',()=>{
      video.currentTime = 0;
      video.play();
  })
  
   })
  },[])
 
 
  return (
    <div className='project'>
      <video src={`../../../public/video/${props.video}`} className='project-video' width={"100%"}  controls autoPlay muted loop>
     
      </video>
      <div className="project__review">
        <div className="project__review--header">
          <span>web</span>
        </div>
        <div className="project__review--title">
          <span className="second-title">
           {props.title}
          </span>
        </div>
        <div className="project__review--describtion">
          <p>
              {props.info}
          </p>
        </div>
        <div className="project__review--viewer">
          <span className="">
          View code on GitHub  
            <a className="project__review--viewer--link-icon" href={props.url} target='_blank'>
              <FaExternalLinkAlt />
            </a>
          </span>
        </div>
      </div>      
    </div>
  )
}

export default Project
