
import Project from '../../Components/Project/Project'
import Container from '../../Components/Container/Container'

const Projects = () => {
  return (
    <Container black={true}>

    
    <section className='projects' id="projects">
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
    </Container>
  )
}

export default Projects
