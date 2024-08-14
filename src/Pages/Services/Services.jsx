
import Service from '../../Components/service/Service'
import Container from '../../Components/Container/Container'

const Services = () => {
  return (
    <Container black={false}>
      <section className='services' id='services'>
      <div className="services__header">
        <span className="second-title">My </span>
        <span className="second-sub-title"> Services</span>
      </div>
      <div className="services__title">
        <span className='title'>What I Do</span>
      </div>
      <div className="services__gallery">
          <Service
           logo = {'BsLayoutTextWindow'} 
          title ={ 'Frontend Developer'} 
          describtion={' Development of custom web pages.Using current technologies and libraries of the labor field'}
          key={1} />  
           <Service
          logo = {'RiPantoneLine' } 
          title ={ 'UI/UX Designer'} 
          describtion={' Development of custom web pages.Using current   technologies and libraries of the labor field'}
            key={1} /> 
         <Service
          logo = {'FaPenNib'} 
          title ={ 'Graphic Design'} 
          describtion={' Development of custom web pages.Using current technologies and libraries of the labor field'}
          key={1}
          />
          

      </div>

    </section>
    </Container>
    
  )
}

export default Services
