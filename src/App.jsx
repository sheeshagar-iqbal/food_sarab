import React, { createContext, useState } from "react";
import Navbar13 from "./component/Navbar13";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import Menu from "./component/Menu";
import CircularGallery from "./component/CircularGallery";
import Chefs from "./component/Chefs";
import Reservation from "./component/Reservation";
import ReservationShow from "./component/ReservationShow";
export const Authcontext = createContext();
const App = () => {
  let [Auth, setAuth] = useState(false);
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
         {/* <Reservation/> */}

        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<ReservationShow />} />
        </Routes>
      </Authcontext.Provider>
    </>
  );
};

export default App;
