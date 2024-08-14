
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Sections/Header/Header'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Projects from './Pages/Projects/Projects'
import Contacts from './Pages/Contacts/Contacts'
import About from './Pages/About/About'
import Footer from './Sections/Footer/footer'



function App() {
 

  return (
    <>
    <BrowserRouter>


     
      <Header/>       
      <Home />
      <About />
      <Services/>
      <Projects/>
      <Contacts />
   

        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contacts' element={<Contacts />}/>
        </Routes>  */}  

   
    <Footer />


    </BrowserRouter>

    </>
  )
}

export default App
