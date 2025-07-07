import { useState } from 'react'

import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import About2 from "./pages/About2"

function App() {
  return(
    <>
      <div>
        hello
        <Link to="/about">Click this</Link>
      </div>
    <Routes>
      <Route path="/about" element={<About2 />}  /> 
    </Routes>
    
    </>
  )

  
}

export default App
