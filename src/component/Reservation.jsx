import React from 'react'
import { ReservationForm } from './ReservationForm'

const Reservation = () => {
  return (
    <>
    <div className="reservation">
       <div className="cgcontainer rescontainer">
            <div className="cgcontain">
              <div className="wwf">Book a Table</div>
            <h1 className='cgtitle'>Make a <span>Reservation</span></h1>
            <div className='cgsub'>Reserve your table for a memorable dining experience. We  <br />recommend booking 24 hours in advance for weekend <br /> evenings.</div>
            </div>

            <div >
               <ReservationForm/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Reservation