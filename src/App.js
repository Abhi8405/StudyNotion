import { Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Contact from "./pages/Contact"
import About from "./pages/About"
import PrivateRoute from "./components/PrivateRoute"
import { useState} from 'react'
function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  
  
  return (
  <div className="bg-richblack-900 flex flex-col background h-screen w-screen">
  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
  <Routes>
  <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
  <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>} />
  <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
  
  <Route path="/contact" element={<Contact />} /> 
  <Route path="/about" element={<About />} /> 

  <Route path="/dashboard" element={
    <PrivateRoute isLoggedIn={isLoggedIn}>
       <Dashboard />
    </PrivateRoute>
  }
   />
</Routes>
  </div>)
}

export default App;
