import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Login from './pages/Login';
import Home from "./pages/Home";
import Post from './pages/Post';
import Profile from "./pages/Profile";



function App() {
  return (
    
    <div className="bg-stone-900 h-full overflow-auto">
      
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
          
    </div>
  )
}

export default App;
