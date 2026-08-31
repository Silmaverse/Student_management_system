import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import SigunUpNavbar from "../components/Navbar/SigunUpNavbar";

const ProtectedRoute = () => {
  return (
    <>
      <SigunUpNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default ProtectedRoute