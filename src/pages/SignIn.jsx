import React, { useState } from 'react'
import InputField from '../components/InputField'
import LoginButton from '../components/LoginButton'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

const Home = () => {
  

  const handleButtonClick = (data) => {

    console.log(data,"로 이동")
  }
  //logic
  // const history = useNavigate();
  // const goToHome = () => {
  //   history("/");
  // }
  let [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''

  });


  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()



//TODO 3개값 모두 formData 로 바꾸기 
const handleInputChange = (inputValue, name) => {

  const newFormData = {...formData, [name]: inputValue}
  setFormData(newFormData)
  // if (name === 'name'){setName(inputValue)} 
  //   else if (name === 'email') {setEmail(inputValue)} 
  //     else {setPassword(inputValue)}
  console.log("newformdata",newFormData)

 

}

const handleSignIn = (event) => {
  event.preventDefault();
  console.log(formData)

  // console.log('name', name)
  // console.log('email', email)
  // console.log('password', password)

}
  



  //view
  return (
    <div className='text-center p-8'>
      
      <img src="./images/logo1.svg" alt="스레드이미지" className='inline-block'/>
      <p className='text-white text-xs font-bold m-4'>스레드에서 소통해보세요</p>

<form onSubmit={handleSignIn}>
      <InputField type={"text"} name={"name"} placeholder={"Name"} onChange={handleInputChange}/>
      <InputField type={"text"} name={"email"} placeholder={"Email"} onChange={handleInputChange}/>
      <InputField type={"password"} name={"password"} placeholder={"Password"} onChange={handleInputChange}/>
     
      <LoginButton type="submit" className={"bg-slate-100 border-2 w-full h-9 rounded-lg mb-3 text-xs"} text={"Create Account"} onClick={handleButtonClick}/>

      </form>
      <p className='text-gray-500 text-xs mb-5'>계정이 있으신가요?   <Link to={'./Login'} style={{color: 'blue'}}> 로그인 </Link> </p>


    
    
    </div>
  )
}


export default Home