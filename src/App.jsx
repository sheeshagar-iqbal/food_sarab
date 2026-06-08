import React, { createContext, useState } from 'react'
import Navbar13 from './component/Navbar13'
import './App.css'
import Home from './component/Home'
import Scroller from './component/Scroller'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
export const Authcontext = createContext()
const App = () => {
  let [Auth, setAuth] = useState(false)
  return (
    <>
      <Authcontext.Provider value={{Auth,setAuth}}>
              <Navbar13/>
      </Authcontext.Provider>
    
    
    {/* <Home/> */}
    <Scroller/>

    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App