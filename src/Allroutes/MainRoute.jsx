import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../component/Login'
import Signup from '../component/Signup'
const MainRoute = () => {
  return (
    <Routes>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/Signup"} element={<Signup/>}/>
    </Routes>
  )
}

export default MainRoute