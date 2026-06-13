import React from 'react'

const Opening_Hours = () => {
  return (
    <>
    <div className="opcontainer">
     <div className="cgcontain opcontain">
              <div className="wwf">Opening Hours</div>
            <h1 className='cgtitle optitle'>We're Open <span>For You</span></h1>
          
            </div>

            <div className="opcard">
                <div className='optime'>
                   <div className="opt">
                     <div className="opday"><i class="fa-solid fa-calendar"></i>Monday - Tuesday</div>
                    <div className="optimezone">Closed</div>
                   </div>
                   <hr />
                   <div className="opt">
                     <div className="opday"><i class="fa-solid fa-calendar"></i>Wednesday - Thursday</div>
                    <div className="optimezone">09:00 AM - 10:00 PM</div>
                   </div>
                   <hr />
                   <div className="opt">
                     <div className="opday"><i class="fa-solid fa-calendar"></i>Friday</div>
                    <div className="optimezone">
09:00 AM - 11:00 PM</div>
                   </div>
                   <hr />
                   <div className="opt">
                     <div className="opday"><i class="fa-solid fa-calendar"></i>Saturday</div>
                    <div className="optimezone">10:00 AM - 11:30 PM</div>
                   </div>
                   <hr />
                   <div className="opt">
                     <div className="opday"><i class="fa-solid fa-calendar"></i>Sunday</div>
                    <div className="optimezone">11:00 AM - 09:00 PM</div>
                   </div>
                   
                </div>



                <div className='oporder' style={{backgroundColor:'#E8281A'}}>
                    <i className='fas fa-shipping-fast'></i>
                    <h4>Order Online</h4>
                    <p>Get hot food delivered in 25 minutes</p>
                    <button>Order Now?</button>
                </div>
                <div className='opaddress'>
                    <h5> <i class="fa-solid fa-location-crosshairs" style={{marginRight:'10px', color:'#F6A623'}}></i>Find Us</h5>
                    <div className="opt">
                     <div className="opday"><i class="fa-solid fa-map"></i>Address</div>
                    <div className="optimezone">42 Flavor Street, NY</div>
                   </div>
                   <hr />
                   <div className="opt">
                     <div className="opday"><i class="fa-solid fa-phone"></i>Phone</div>
                    <div className="optimezone">+1 (800) 123-4567</div>
                   </div>
                   <hr />
                   <div className="opt">
                     <div className="opday"><i class="fa-solid fa-at"></i>Email</div>
                    <div className="optimezone">hello@sarabfood.com</div>
                   </div>
                </div>
            </div>

            </div>
    </>
  )
}

export default Opening_Hours