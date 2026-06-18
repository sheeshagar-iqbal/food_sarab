import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const ReservationForm = () => {
    const [resdata,setResdata]  =useState({})
    const navigate =useNavigate()

      const store =(e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setResdata({...resdata, [name]: value})
   }

   const handlesubmit =(e)=>{
        e.preventDefault()
        console.log('hi');
        
        axios.post(`http://localhost:3000/reservation`,resdata)
        .then(()=>toast('data insert sucessfully'))
        .then(()=>{console.log('added success')
                    navigate('/reservation')

        })
        .catch((err) => console.log(err));
        
   }
  return (
    
    <>
    <div className="resformcontainer">
    <div className="rescontactcard">
        <h2 className="restitle">Contact Info</h2>
        <p className="resdescription">
            We're happy to help you plan the perfect  <br />dining experience.
        </p>

        <div className="resinfoitem">
            <div className="resiconbox">🕒</div>
            <div>
                <h4>OPENING HOURS</h4>
                <p>Wed - Sun, 9 AM - 11 PM</p>
            </div>
        </div>

        <div className="resinfoitem">
            <div className="resiconbox">📞</div>
            <div>
                <h4>CALL FOR BOOKING</h4>
                <p>+1 (800) 123-4567</p>
            </div>
        </div>

        <div className="resinfoitem">
            <div className="resiconbox">👥</div>
            <div>
                <h4>GROUP DINING</h4>
                <p>Special menus for 10+ guests</p>
            </div>
        </div>

        <div className="resinfoitem">
            <div className="resiconbox">📍</div>
            <div>
                <h4>LOCATION</h4>
                <p>42 Flavor Street, NY</p>
            </div>
        </div>
    </div>

    <div className="resformcard">
       <form onSubmit={handlesubmit}  >
            <div className="resformgrid">
                <div className="resfield">
                    <label>Full Name *</label>
                    <input type="text" placeholder="John Doe" name='name' onChange={store}/>
                </div>

                <div className="resfield">
                    <label>Phone Number *</label>
                    <input type="text" placeholder="+1 (800) 000-0000"  name='number' onChange={store}/>
                </div>

                <div className="resfield">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@email.com"  name='email' onChange={store}/>
                </div>

                <div className="resfield">
                    <label>Number of Guests *</label>
                    <select   name='guests' onChange={store}>
                        <option value={1}>1 Person</option>
                        <option value={2}>2 Person</option>
                        <option value={4}>4 Person</option>
                        <option value={10}>10 Person</option>
                        <option value='more'>more Person</option>
                    </select>
                </div>

                <div className="resfield">
                    <label>Date *</label>
                    <input type="date"  name='date' onChange={store}/>
                </div>

                <div className="resfield">
                    <label>Time *</label>
                    <select  name='time' onChange={store}>
                        <option value='9am' >09:00 AM</option>
                        <option value='10am' >10:00 AM</option>
                        <option value='11am' >11:00 AM</option>
                        <option value='12am' >12:00 AM</option>
                        <option value='1pm' >01:00 PM</option>
                        <option value='2pm' >02:00 PM</option>
                        <option value='3pm' >03:00 PM</option>
                        <option value='4pm' >04:00 PM</option>
                        <option value='5pm' >05:00 PM</option>
                        <option value='6pm' >06:00 PM</option>
                        <option value='7pm' >07:00 PM</option>
                        <option value='8pm' >08:00 PM</option>
                        <option value='9pm' >09:00 PM</option>
                        <option value='10pm' >10:00 PM</option>
                        
                    </select>
                </div>
            </div>

            <div className="resfield">
                <label>Special Requests</label>
                <textarea placeholder="Allergies, dietary needs, special occasions..."  name='specialRequest' onChange={store}></textarea>
            </div>

            <button className="resbtn" type='submit'>
                Confirm Reservation
            </button>
        </form>
    </div>
</div>
    </>
  )
}
