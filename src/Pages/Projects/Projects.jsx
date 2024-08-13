import React from 'react'
import Project from '../../Components/Project/Project'

const Projects = () => {
  return (
      <section className='projects'>
      <div className="projects__header">
        <span className="second-title">My </span>
        <span className="second-sub-title"> projects</span>
      </div>
      <div className="projects__title">
        <span className='title'>Recent Projects </span>
      </div>
      <div className="projects__gallery">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />



      </div>

    </section>
  )
}

export default Projects
