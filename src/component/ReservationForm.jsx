import React from 'react'

export const ReservationForm = () => {
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
        <form>
            <div className="resformgrid">
                <div className="resfield">
                    <label>Full Name *</label>
                    <input type="text" placeholder="John Doe"/>
                </div>

                <div className="resfield">
                    <label>Phone Number *</label>
                    <input type="text" placeholder="+1 (800) 000-0000"/>
                </div>

                <div className="resfield">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@email.com"/>
                </div>

                <div className="resfield">
                    <label>Number of Guests *</label>
                    <select>
                        <option>1 Person</option>
                    </select>
                </div>

                <div className="resfield">
                    <label>Date *</label>
                    <input type="date"/>
                </div>

                <div className="resfield">
                    <label>Time *</label>
                    <select>
                        <option>09:00 AM</option>
                    </select>
                </div>
            </div>

            <div className="resfield">
                <label>Special Requests</label>
                <textarea placeholder="Allergies, dietary needs, special occasions..."></textarea>
            </div>

            <button className="resbtn" type="button">
                Confirm Reservation
            </button>
        </form>
    </div>
</div>
    </>
  )
}
