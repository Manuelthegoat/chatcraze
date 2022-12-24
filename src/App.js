import React, { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Dash from './Dash'
import Navbar from './Navbar'
const App = () => {
 
  

  
  return (
    <div className='app'>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Body/>}/>
    <Route path='/dashboard' element={<Dash/>}/>
   </Routes>
    </div>
  )
}

export default App
