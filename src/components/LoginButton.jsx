import React from 'react'

const LoginButton = ({className, text}) => {

  return (
    
    <button type='button' className={className}>
      {text}
    </button>



  )
}

export default LoginButton

// bg-slate-100 border-2 w-full rounded-lg mt-3 mb-3