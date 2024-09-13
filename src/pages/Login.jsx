import React from 'react'
import InputField from '../components/InputField'
import LoginButton from '../components/LoginButton'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  const handleButtonClick= (data) =>{

    console.log(data,"로 이동")
  }

  //logic
  // const history = useNavigate();
  // const goToHome = () => {
  //   history("/");
  // }

  //view
  return (
    <div className='text-center p-8'>
      
      <img src="./images/logo1.svg" alt="스레드이미지" className='inline-block'/>
      <p className='text-white text-xs font-bold m-4'>스레드에서 소통해보세요</p>
    <form>
      <InputField type={"text"} name={"email"} placeholder={"Email"}/>
      <InputField type={"password"} name={"password"} placeholder={"Password"}/>
     
      <LoginButton category="login" type="submit" className={"bg-slate-100 border-2 w-full h-9 rounded-lg mb-3 text-xs flex items-center justify-center"} onClick={
        handleButtonClick}/>
</form>

      <p className='text-gray-500 text-xs mb-5'>계정이 없으신가요?   <Link to={'/'} style={{color: 'blue'}}> 가입하기 </Link> </p>

      <p className='text-gray-500 text-xs relative'> <i className='block w-full h-[1px] bg-gray-500 absolute top-1/2 transform translate-y-1/2'/> <span className='bg-stone-900 relative z-10 px-2'>  or  </span> </p>
   
      <LoginButton category="socialLogin" type="button" className={"bg-black border-2 text-white h-10 w-full rounded-lg mt-3 mb-3 text-xs flex items-center justify-center"} 
     onClick={
        handleButtonClick}/>

    
    </div>




  )
}

export default Login