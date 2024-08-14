import React from 'react'

const Container = ({black,children}) => {
const styles = {
  backgroundColor:black? 'hsl(228, 15%, 15%)':'hsl(228, 15%, 20%)'
}
  return (
      <div style={styles} className='app-container'>
        {children}
      </div>
    
  )
}

export default Container
