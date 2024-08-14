import React, { memo } from 'react'

const NavItem = ({children,href,active,handleActiveColor}) => {
const classe = active?'active':'';
 console.log(active)
  return (
    <a href={href} className={classe} onClick={()=>{handleActiveColor(children)}}>
      {children}
    </a>
  )
}

export default memo(NavItem) ;
