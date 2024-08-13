import React from 'react'

const Container = ({children}) => {
  return (
    <div className="first-container">
      <div className='app-container'>
        {children}
      </div>
    </div>
    
  )
}

export default Container
