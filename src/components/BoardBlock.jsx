import React, { useState } from 'react'
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { FaRegTrashCan } from "react-icons/fa6";
import { initialFeedList } from '../data/response'

const BoardBlock = ({name, image, text, likeCount}) => {


  
  const [count,setCount] = useState(likeCount)
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

    <div className='block-box pl-5 p-4 text-white text-xs flex'>
      <div>
      <img className='overflow-hidden rounded-2xl size-5 mt-2' src={image} alt='구글이미지' />
      </div>
      <div>
      <div className='flex align-middle'>
      <h6 className='m-2'>{name}</h6>
     
     <div className='flex'>
      <p className='m-2'><a href='.'><PiPencilSimpleLineBold /></a></p>
      <p className='m-2'><a href='.'><FaRegTrashCan /></a></p>
      </div>

      </div>
      <div className='pl-2 pt-2 pr-14'>
      <p>{text}</p>

      <p className="mt-2" onClick={handleClick}>{islike? "❤️": "♡"} {count}</p>
      </div>
      </div>

    </div>
  )
}

export default BoardBlock