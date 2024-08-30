import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Components/Navbar"
import Home from '../Pages/Home'
import CertificaDetail from '../Pages/CertificaDetail'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/detail" element={<CertificaDetail/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter