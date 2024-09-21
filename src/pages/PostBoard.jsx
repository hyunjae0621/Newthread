import React from 'react'
import PostBlock from '../components/PostBlock'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const PostBoard = (onPost) => {
  //logic
    const history = useNavigate()
    const [churead, setChuread] = useState("");



    const handleChange = (value) => {
    setChuread(value);

  }


  const handlePost = (event) => {
    event.preventDefault();
    onPost(churead); //부모에게 churead 입력값 넘겨주기
    history('/') //home화면으로 이동
  }

  //view
  return (
    <div>

      <div className='m-4 relative text-center'>
        <p className='absolute text-gray-500'>취소</p>
        <p className='text-white'>새로운 스레드</p>

      </div>
      <hr className='h-1'></hr>

      <form id='post' onSubmit={handlePost}>
      <PostBlock onChange={handleChange}/>
      </form>



      <div className='text-right pr-10'>
      <button type="submit" className='bg-white rounded-md p-1'>
        게시하기
      </button>
      </div>
  

    </div>
  )
}



export default PostBoard