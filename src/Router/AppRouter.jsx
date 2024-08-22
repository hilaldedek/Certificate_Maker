import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Components/Navbar"
import Home from '../Pages/Home'
import CertificaDetail from '../Pages/CertificaDetail'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/detail" element={<CertificaDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter