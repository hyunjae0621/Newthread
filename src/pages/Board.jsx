import React from 'react'
import BoardBlock from '../components/BoardBlock'
import MoveBlock from '../components/MoveBlock'

const Board = () => {
 

 
  return (

    <>
    <div className='text-center mt-5'>

<img src="./images/logo1.svg" alt="스레드이미지" className='inline-block'/>
    </div>

    <div>

    <BoardBlock img='`./images/google.png`'  name="hyunjae" time="7hours ago" text="원하는 만큼 글을 작성하세요. 아무렇게나 작성을 해도 사이즈에 맞게 잘 들어갈겁니다."/>
    <BoardBlock name="nico" time="2 days ago" text="You can wirte everything about your days. So please Thank you all the thing. And say good bye. You can you up, No can no bibi"/>
   

    <MoveBlock />

    </div>

    </>

  )
}

export default Board