import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';


function App() {
  return (
    
    <div className="bg-stone-900 h-full">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
          
    </div>
  )
}

export default App;
