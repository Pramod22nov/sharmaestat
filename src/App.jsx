import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Singin from "./pages/Singin"
import Singout from "./pages/Singout"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/singin" element={<Singin />}/>
        <Route path="/singout" element={<Singout />}/>
      </Routes>
    </BrowserRouter>
  );
}
