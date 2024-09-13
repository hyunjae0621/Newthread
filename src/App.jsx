import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Board from "./pages/Board";


function App() {
  return (
    
    <div className="bg-stone-900 h-full overflow-auto">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
          
    </div>
  )
}

export default App;
