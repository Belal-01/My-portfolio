import React, { useCallback } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import NavItem from '../../Components/NavItem/NavItem';



const Header = () => {
 const [activSidBar,setActivSideBar] = React.useState(false);
 const [navClass,setNavClass] = React.useState('navbar');
 const [menuActiveColor,setMenuActiveColor] = React.useState(JSON.parse(localStorage.getItem('colors'))||{Home:true,
  About:false,
  Services:false,
  Projects:false,
  Contact:false
  })

 function blurHeader(){
 const naCla = window.scrollY>=50?'navbar blur-navbar':'navbar';
 setNavClass(naCla);
 }
 React.useEffect(()=>{
  window.addEventListener('scroll',blurHeader)
 },[])

React.useEffect(()=>{
  localStorage.setItem('colors',JSON.stringify(menuActiveColor));
},[menuActiveColor])
/// ===========    for sidebar   =====================

 const handletogglebutton = ()=>{

  setActivSideBar(prevState =>!prevState);
 }
 
   const classes = activSidBar?'nav-menu nav-menu__active':'nav-menu';
//=============   handle avtive nav item color  ========= 

const handleActiveNavItemColor = useCallback((item)=>{
 setMenuActiveColor(prevState=>
 ({Home:false,
  About:false,
  Services:false,
  Projects:false,
  Contact:false
  }));
  console.log(menuActiveColor)
  if(item==='Home')   
    setMenuActiveColor(prevState=>({...prevState,Home:true}));
  else if(item==='About')
    setMenuActiveColor(prevState=>({...prevState,About:true}));
  else if(item === 'Services')
    setMenuActiveColor(prevState=>({...prevState,Services:true}))
  else if(item === 'Projects')
    setMenuActiveColor(prevState=>({...prevState,Projects:true}));
  else
  setMenuActiveColor(prevState=>({...prevState,Contact:true}));
},[])


  return (
    <div className={navClass}>
      <div className="navbar-logo">
        <h4>
          Belal 
          <span> Mustafa</span>
        </h4>
      </div>
      <span className='toggle-button' onClick={handletogglebutton}>
        <IoIosMenu />
      </span>
     
     <nav className={classes}>
        <ul>
          <li>
            <IoCloseOutline onClick={handletogglebutton}/>
          </li>
          
          <li>
            <NavItem href='#home' active={menuActiveColor.Home} handleActiveColor={handleActiveNavItemColor}>
             Home
            </NavItem>
          </li>
          <li>
           <NavItem href='#about' active={menuActiveColor.About} handleActiveColor={handleActiveNavItemColor}>
             About
            </NavItem>
          </li>
          <li>
           <NavItem href='#services' active={menuActiveColor.Services} handleActiveColor={handleActiveNavItemColor}>
             Services
            </NavItem>
          </li>
          <li>
           <NavItem href='#projects' active={menuActiveColor.Projects} handleActiveColor={handleActiveNavItemColor}>
             Projects
            </NavItem>          
          </li>
          <li>
            <NavItem href='#contact' active={menuActiveColor.Contact} handleActiveColor={handleActiveNavItemColor}>
             Contact
            </NavItem>
          </li>
        </ul>
      </nav>
    

    
      {/* <Sidebar sideBar = {activSidBar} handlSideBar = {handletogglebutton}/> */}

    </div>
  )
}

export default Header
