import { StrictMode,  } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ReservationShow from "./component/ReservationShow";
import Loading from "./pages/Loading";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
        <ToastContainer/>
    </BrowserRouter>
  </StrictMode>,
)
