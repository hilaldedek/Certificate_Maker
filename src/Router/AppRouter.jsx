import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Components/Navbar"
import Home from '../Pages/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route  path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter