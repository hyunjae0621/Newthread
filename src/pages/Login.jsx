import React from 'react'
import InputField from '../components/InputField'
import LoginButton from '../components/LoginButton'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  //logic
  // const history = useNavigate();
  // const goToHome = () => {
  //   history("/");
  // }

  //view
  return (
    <div className='text-center p-8'>
      
      <img src="./images/logo 1.svg" alt="스레드이미지" className='inline-block'/>
      <p className='text-white'>스레드에서 소통해보세요</p>

      <InputField type={"text"} name={"email"} placeholder={"Email"}/>
      <InputField type={"password"} name={"password"} placeholder={"Password"}/>
     
      <LoginButton className={"bg-slate-100 border-2 w-full rounded-lg mt-3 mb-3"} text={"Login"}/>
      <p className='text-gray-500 text-xs'>계정이 없으신가요?   <Link to={''} style={{color: 'blue'}}> 가입하기 </Link> </p>

      <p className='text-gray-500 text-xs'>-----------or-----------</p>
   
      <LoginButton className={"bg-black border-2 text-white h-10 w-full rounded-lg mt-3 mb-3"} text={"Continue with Google"}/>

      {/* <Link to={'/'} style={{color: "red"}} className='link'>Home 화면으로 이동</Link> */}
      {/* <button type="button" onClick={goToHome}>Home 화면으로 이동</button> */}
    </div>
  )
}

export default Login