
import Project from '../../Components/Project/Project'
import Container from '../../Components/Container/Container'

const Projects = () => {
  return (
    <Container black={true}>

    
    <section className='projects section' id="Projects">
      <div className="projects__header">
        <span className="second-title">My </span>
        <span className="second-sub-title"> projects</span>
      </div>
      <div className="projects__title">
        <span className='title'>Recent Projects </span>
      </div>
      <div className="projects__gallery">
        <Project video = {'CYBROG.mp4'} info={'Responseive website Worked using React ,Sass, with use of Database'}/>
        <Project video = {'Amazon2.mp4'} info={'Responseive website Worked using React ,Sass, with use of Database'}/>
        <Project video = {'NoteApp2.mp4'} info={'Responseive website Worked using React ,Sass, with use of Database'}/>
        <Project video = {'facebook2.mp4'} info={'Responseive website Worked using React ,Sass, with use of Database'}/>
        <Project video = {'Tenzes2.mp4'} info={'Responseive website Worked using React ,Sass, with use of Database'}/>
        <Project video = {'portfolio2.mp4'} info={'Responseive website Worked using React ,Sass, with use of Database'}/>


      </div>

    </section>
    </Container>
  )
}

export default Projects
