import React from 'react'

const InputField = ({type, name, placeholder}) => {
  
  
  return (
    
    <input type={type} name={name} placeholder={placeholder} className='w-full rounded-lg border-2 bg-gray-900 pl-3 flex mt-1 mb-1 h-8 text-sm'/>

  )
}

export default InputField