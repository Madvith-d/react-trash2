import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from "./pages/About2"

function App() {
  return(
    <>
      <div>
      hello
    </div>
    <Routes>
      <Route path="/about" element={<About />}  /> 
    </Routes>
    
    </>
  )

  
}

export default App
