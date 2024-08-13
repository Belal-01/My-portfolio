import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const Sidebar = (props) => {
  const classes = props.sideBar?'sidebar__nav-menu sidebar__active':'sidebar__nav-menu'
  return (
  
    <div>
        <nav  className={classes} >
        <ul>
          <li><IoCloseOutline onClick={()=>props.handlSideBar()}/></li>
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
    </div>
  )
}

export default Sidebar
