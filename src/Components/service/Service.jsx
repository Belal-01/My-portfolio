import React from 'react'
import { BsLayoutTextWindow } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { RiPantoneLine } from "react-icons/ri";


const Service = (props) => {

    
  return (
    <div className='service'>
      <div className="service__logo">
        {props.logo==='BsLayoutTextWindow'&&<BsLayoutTextWindow />}
        {props.logo==='FaPenNib'&&<FaPenNib />}
        {props.logo==='RiPantoneLine'&&<RiPantoneLine />}



      </div>
      <div className="service__title">
        <span className="second-title">
       {props.title}
        </span>
      </div>
      <div className="service__describtion">
        <p>
      {props.describtion}
        </p>
      </div>
      
    </div>
  )
}

export default Service
