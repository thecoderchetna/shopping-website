import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './assets/pages/Homepage/Homepage'

const App = () => {
  return (
    <div>
      <Routes>
     <Navbar/>
      <Route path='/'element={<Homepage />}/>
     </Routes>
    
    </div>
  )
}

export default App

