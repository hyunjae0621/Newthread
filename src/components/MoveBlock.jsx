import React from 'react'
import { Link } from 'react-router-dom'

const MoveBlock = () => {
  return (
<>
    <div className='h-6 flex bg-gray-700 px-8 justify-evenly'>
      
      <Link to="/"><img className='w-6' src="./images/home.png" alt="" /></Link>
      <Link to="/post"><img className='w-6' src="./images/write.png" alt="" /></Link>
      <Link to="/profile"><img className='w-6' src="./images/profile.png" alt="" /></Link>
      
      </div>
  
  
    </>
    
  
  )
}

export default MoveBlock