
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
        <Project video = {'CYBROG.mp4'} title = {'Games Viewer'} info={'Responseive website Worked using React ,Sass, with use of Database'} url ={'https://github.com/Belal-01/CYBROG-Game'}/>
        <Project video = {'Amazon2.mp4'} title={'Amazon '} info={'Responseive website (Immitation of Amazon) Worked using JavaScript,HTML ,Css'} url ={'https://github.com/Belal-01/Amazon-app'}/>
        <Project video = {'NoteApp2.mp4'} title={'Note App'} info={'Responseive website Worked using React ,Sass, with use of Database'} url={'https://github.com/Belal-01/Note-app'}/>
        <Project video = {'facebook2.mp4'} title={'Facebook'} info={'Immitation of facebook worked using HTML , Sass '} url = {'https://github.com/Belal-01/facebook-web'}/>
        <Project video = {'Tenzes2.mp4'} title={'Tenzes Game'} info={'Worked using React ,impementation of state managment'} url = {'https://github.com/Belal-01/Tenzies-Game'}/>
        <Project video = {'portfolio2.mp4'} title={'Portfolio Design'} info={'worked using javaScript,HTML,Sass,'} url = {'https://github.com/Belal-01/portfolio'}/>


      </div>

    </section>
    </Container>
  )
}

export default Projects
