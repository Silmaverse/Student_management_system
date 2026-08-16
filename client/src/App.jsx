import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router";
import Home from './pages/Home';
import ProtectedRoute from './layouts/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import RootLayOut from './layouts/RootLayOut';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<RootLayOut/>}>
       <Route index element={<Home/>}/>
       <Route path='/auth' element={<ProtectedRoute/>}>
         <Route path='login' element={<Login/>} />
         <Route path='register' element={<Register/>} />
       </Route>
       </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App