import React from 'react'
import { IoIosMenu } from "react-icons/io";
import Sidebar from '../SideBar/Sidebar';
import { NavLink}  from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
 const [activSidBar,setActivSideBar] = React.useState(false);
 function blurHeader(){
  window.scrollY>=70
 
 }
 React.useEffect(()=>{
  window.addEventListener('scroll',blurHeader)
 },[])
 const handletogglebutton = ()=>{
  setActivSideBar(prevState =>!prevState);
 }
   const classes = activSidBar?'nav-menu nav-menu__active':'nav-menu'

  return (
    <div className='navbar blur-navbar'>
      <div className="navbar-logo">
        <h4>
          Belal 
          <span> Mustafa</span>
        </h4>
      </div>
      <span className='toggle-button' >
        <IoIosMenu onClick={handletogglebutton}/>
      </span>
     
     <nav className={classes}>
        <ul>
          <li>
            <IoCloseOutline onClick={handletogglebutton}/>
          </li>
          
          <li>
            <NavLink to='/' >Home</NavLink>
          </li>
          <li>
            <NavLink to='/About'>About</NavLink>
          </li>
          <li>
            <NavLink to='Services'>Services</NavLink>
            
          </li>
          <li>
            <NavLink to='Projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='Contacts'>Contacts</NavLink>
          </li>
        </ul>
      </nav>
    

    
      {/* <Sidebar sideBar = {activSidBar} handlSideBar = {handletogglebutton}/> */}

    </div>
  )
}

export default Header
