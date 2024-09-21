import React from 'react'
import { Link, useLocation} from 'react-router-dom'

import { GoHome } from "react-icons/go";

import { FaRegUserCircle } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";


const MoveBlock = () => {
  
//logic

/** 
 * 1. navList라는 변수를 만든다 (배열))
 * 2. navList 배열에는 각 네비게이션에 대한 데이터를 객체로 작성
 * 3. html 부분에서 li 태그를 navList의 map을 이용해서 반복생성함
 * 4. at key props, connect id value
 * 5. html 요소에 속성 (to, icon)을 navList의 각 객체에 값으로 연결
 * 
 * 
 * 
 * 사용자가 현재 머무르는 페이지에 따라 nav 아이콘 활성화한 아이콘으로 변경
 * 1. 사용자가 현재 머무르는 페이지의 pathname을 가져온다
 * 2. 해당 pathname 과 map을 돌리는 nav 요소의 pathname이 같은지 체크한다
 * 3. 체크한 값이 true면 activeIcon으로 변경 
 * 4. 체크한 값이 true면 icon으로 보여주기
 * 5. 
*/
const location = useLocation()
console.log("🚀 location:", location.pathname)











const navList = [{
  id : 1,
  pathname: '/',
  icon: <GoHome size={'26px'}/>,
  activeIcon: <GoHomeFill size={'26px'}/>,

},{
  id : 2,
  pathname: '/postboard',
  icon: <FaRegPenToSquare size={'22px'} />,
  activeIcon: <FaPenToSquare size={'22px'} />,

},{
  id : 3,
  pathname: '/profile',
  icon: <FaRegUserCircle size={'22px'}/>,
  activeIcon: <FaCircleUser size={'22px'}/>,

},]





  return (
<>
    <div className='h-6 flex bg-stone-700 px-8 justify-evenly'>
    <ul className='flex '>
      {navList.map((nav) =>  (
        <li key={nav.id} className='m-auto ml-6 mr-6'>

        

          <Link to={nav.pathname}>
          
          {location.pathname === nav.pathname ? nav.activeIcon : nav.icon}
          </Link>
          </li>
      ))}
     
      
      </ul>
     
      </div>
  
  
    </>
    
  
  )
}
// map 쓸때는 꼭 key 를 써줘야함. 
export default MoveBlock