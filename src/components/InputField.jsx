import React, { useState } from 'react'

const InputField = ({type, name, placeholder, onChange}) => {
  
  //logic
 /**
  * 입력값 부모컴포넌트에 넘겨주기 
  * 1. handleChange()  input태그에 onChange 이벤트 연결
  * 2. 연결된 함수에서 사용자 입력값 받아오기
  * 3. 받아온 입력값 state에 저장
  * 4. 부모에게 입력값 보내주기
  * 
  * 
  */


 const [value, setValue] = useState('')

const handleChange = (event) => {

  const {value} = event.target;
  //const value = event.target.value;
  setValue(value);
  onChange(value, name);
};
  



  //view


  return (
    
    <input type={type} name={name} placeholder={placeholder} onChange={handleChange}
    value={value}
    
    className='w-full rounded-lg border-2 border-neutral-700 bg-zinc-800 pl-3 flex mt-1 mb-1 h-8 text-sm text-white'/>

  )
}

export default InputField