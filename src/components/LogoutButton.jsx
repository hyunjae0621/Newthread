import React, { useState } from 'react'

const LogoutButton = ({className}) => {



  const [onClick, setOnClick] = useState();

const handleClick = () => {
  console.log("Click");
  setOnClick(onClick);
}


  return (
    <div className='flex items-center justify-center'> 
    
    <button onClick={handleClick} type="button" className = {`${className} bg-white p-1 rounded-lg text-sm`}>

    로그아웃
    </button>
    
    </div>
  )
}

export default LogoutButton