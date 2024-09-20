import React, {  useState } from 'react'
import InputField from '../components/InputField'
import LoginButton from '../components/LoginButton'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom's

const Login = () => {
  
  const handleButtonClick= (data) =>{

    console.log(data,"로 이동")
  }





  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

const handleInputChange = (inputValue, name) => {
  //field: email, password
//   let newFormData = {...formData, [name]: InputField}
//  setFormData(newFormData);

  //TODO : 심항 연산자로 변경

    name === 'email' ? setEmail(inputValue) : setPassword(inputValue);

  // if (name === 'email'){
  //   setEmail(inputValue);
  // } else { 
  //   setPassword(inputValue);
  // }


};

const handleLogin = (event) => {
  event.preventDefault();
    console.log("email", email);
    console.log("password", password);

}

  // if (field === 'email' ) {
  //   newFormData = {...formData, email: InputField}
  // } else {

  //   newFormData = {...formData, password: InputField}
    
  // }
  
  // console.log("🚀 ~ handleInputChange ~ newFormData:", newFormData)

  // }


  // console.log("🚀 omega:",name, omega)
  


//자식으로부터 받은 inputValue의 값을 state 에 저장



/** 자식으로부터 받은 inputValue의 값을 state 에 저장
 * 1. handleInputChange 함수에서 data 라는 변수와 name 이라는 inputValue와 
 * name 이라는 해당 input의 필드값을 받아온다.
 * 2. 사용자가 email 필드를 입력하면 email state에 inputValue의 값을 넣어준다.
 * 
 * 3. 사용자가 password 필드를 입력하면 password state에 inputValue의 값을 넣어준다.
 * 4. form 태그에서 onSubmit 이라는 이벤트를 handleLogin 이라는 함수에 연결한다 
 * 5. handleLogin 에서 email, password 의 값을 확인한다..
 * 
 */





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
    <form onSubmit={handleLogin}>
      <InputField type={"text"} name={"email"} placeholder={"Email"} onChange={handleInputChange}/>
      <InputField type={"password"} name={"password"} placeholder={"Password"} onChange={handleInputChange}/>
     
      <LoginButton category="login" type="submit" className={"bg-slate-100 border-2 w-full h-9 rounded-lg mb-3 text-xs flex items-center justify-center"} onClick={
        handleButtonClick}/>
</form>

      <p className='text-gray-500 text-xs mb-5'>계정이 없으신가요?   <Link to={'/'} style={{color: 'blue'}}> 가입하기 </Link> </p>

      <p className='text-gray-500 text-xs relative'> <i className='block w-full h-[1px] bg-gray-500 absolute top-1/2 transform translate-y-1/2'/> <span className='bg-stone-900 relative z-10 px-2'>  or  </span> </p>
   
      <LoginButton category="socialLogin" type="button" className={"bg-black border-2 text-white h-10 w-full rounded-lg mt-3 mb-3 text-xs flex items-center justify-center"} 
     onClick={
        handleButtonClick}/>

    
    </div>




  );

}
export default Login