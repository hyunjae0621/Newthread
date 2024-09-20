import React, { useState } from 'react'
import BoardBlock from '../components/BoardBlock'
import MoveBlock from '../components/MoveBlock'
import LogoutButton from '../components/LogoutButton'
import { initialFeedList } from '../data/response'


const Board = (onClick) => {

const handleLogoutClick = () => {
} 

const [feedList, setFeedList] = useState(initialFeedList);







  return (

    <>
    <div className='text-center mt-5 grid grid-cols-3'>

<img src="./images/logo1.svg" alt="스레드이미지" className='col-start-2'/>
<LogoutButton onClick={handleLogoutClick()} className=""/>
    </div>

    <div>
      <ul>
        {feedList.map((feed) => (   
          
          <li key={feed.id}>
    <BoardBlock image={feed.userProfileImage}  name={feed.userName} text={feed.churead} likeCount={feed.likeCount}/>

        </li>))}

     
    
    </ul>
    <MoveBlock />

    </div>

    </>

  )
}

export default Board