import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import DashBoard from "./pages/Dashboard"
import Project from "./pages/Projects"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/project' element= {<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App