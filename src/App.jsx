import React, { createContext, useState } from 'react'
import Navbar13 from './component/Navbar13'
import './App.css'
import Home from './component/Home'
import Scroller from './component/Scroller'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Category from './component/Category'
import About from './component/About'
import Offer from './component/Offer'
import Foodshowcase from './component/Foodshowcase'
import Menu from './component/Menu'
import Chefs from './component/Chefs'
import Opening_Hours from './component/Opening_Hours'
import Reservation from './component/Reservation'
import Review from './component/Review'
export const Authcontext = createContext()
const App = () => {
  let [Auth, setAuth] = useState(false)
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <>
       <Authcontext.Provider
      value={{
        Auth,
        setAuth,
        login,
        setLogin,
        signup,
        setSignup,
      }}
    >
      <Navbar13 />
      {/* <Home/>
      <Scroller />
      <Category/>
      <About/>
      <Offer/>
      <Foodshowcase/> */}
      {/* <Menu/> */}
      {/* <Chefs/> */}
      {/* <Opening_Hours/> */}
      {/* <Reservation/> */}
      <Review/>


      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Authcontext.Provider>
    </>
  )
}

export default App