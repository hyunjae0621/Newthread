import React, { useState } from 'react'


const PostBlock = ({ onChange }) => {
//logic

const [value, setValue] = useState ('')

const handleChange =(event) => {
  const {value} =event.target;
  setValue(value)
  onChange(value)

}


//view
  return (


// 이미지 칸, 이름, 시간, 메시지, 좋아요 - 개수, 수정/삭제 버튼

<div className='block-box pl-5 p-4 text-white text-xs flex'>
<div>
<img className='overflow-hidden rounded-2xl size-5 mt-2' src={'./images/hyunjae.jpg'} alt='구글이미지' />
</div>
<div>
  <div className='flex align-middle'>
  <h6 className='m-2'>guswo57</h6>


  </div>

<form id='post'>
<div className='pl-2 pt-2 pr-14'>
<textarea value={value} rows={5} placeholder='문구를 작성하세요'
className='text-white w-full bg-stone-800'
onChange={handleChange}>


    
</textarea>


</div>
</form>
</div>

</div>
)
}

export default PostBlock