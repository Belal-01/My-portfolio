
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Container from './Components/Container/Container'
import Header from './Sections/Header/Header'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Projects from './Pages/Projects/Projects'
import Contacts from './Pages/Contacts/Contacts'
import About from './Pages/About/About'


function App() {


  return (
    <>
    <BrowserRouter>
    <Container > 
      <Header />       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contacts' element={<Contacts />}/>
        </Routes> 
    </Container>
    </BrowserRouter>

    </>
  )
}

export default App
