import React from 'react'

const LoginButton = ({type, className, onClick, category}) => {

  const handleClick = () => {
    
    onClick(type)

  }

  return (
    
    <button category={category === "login" ? "submit" : "button"} type={type} className={className} onClick={handleClick}>

      {category === "socialLogin" && <img src="./images/google1.svg" style={{width: 20, marginRight: 15}}/>}
  
      {category === "login" ? "Login" : "Continue witn Google"}
    </button>



  )
}

export default LoginButton

// bg-slate-100 border-2 w-full rounded-lg mt-3 mb-3