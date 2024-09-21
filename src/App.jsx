import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Login from './pages/Login';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useState } from "react";
import PostBoard from "./pages/PostBoard";




function App() {
  //logic

  
const [churead,setChuread] = useState('')


  const handlePost = (churead) => {
    setChuread(churead);


  }


  //view
  return (
    
    <div className="bg-stone-900 h-full overflow-auto">
      
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home churead={churead} />} />
          <Route path="/postboard" element={<PostBoard onPost={handlePost}/>} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
          
    </div>
  )
}

export default App;
