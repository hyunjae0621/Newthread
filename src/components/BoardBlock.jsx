import React, { useState } from 'react'

const BoardBlock = ({name, time, text, image}) => {

  const [count,setCount] = useState(90)
  const [islike,setIsLike] =useState(false)

  const handleClick = () => {
    if (!islike) {
      setCount(count + 1);
      setIsLike(true);
   
    } else {
    setCount(count - 1)
      setIsLike(false);
  
    }
  }

  return (


// 이미지 칸, 이름, 시간, 메시지, 좋아요 - 개수, 수정/삭제 버튼

    <div className='block-box pl-5 p-4 text-white text-xs'>
      <div className='flex align-middle'>
      <img className='overflow-hidden rounded-2xl size-5 mt-2' src={image} alt='구글이미지' />
      <h6 className='m-2'>{name}</h6>
      <p className='text-gray-500 m-2'>{time}</p>
      <p className='m-2'><a href='.'>🖋️</a></p>
      <p className='m-2'><a href='.'>🗑️</a></p>
   
      </div>

      <div className='pl-2 pt-2 pr-14'>
      <p>{text}</p>

      <p onClick={handleClick}>{islike? "❤️": "♡"} {count}</p>
      </div>


    </div>
  )
}

export default BoardBlock