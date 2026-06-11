import React from 'react'
import about1 from '../image/menu1.jpg'

const Menucard = () => {
  return (
    <>
      <div className="menucard">
        <img src={about1} alt="" />
        <div className="top">
            <p><i class="fa-solid fa-star"></i> Hot</p>
            
        </div>
        <div className="topstar">
                love
            </div>

        <div className="menuinfo">
             
        <h6>Burgers</h6>
        <h5>Classic Smash Burger</h5>
        <p>Double smashed patty, cheddar, caramelized onions, pickles & special sauce</p>

        <div className="ratestar">
            <div className="rate">
                <h2><sup>$</sup>14.99 <span>27.49</span></h2>
            <p><i class="fa-solid fa-star"></i> (128)</p>
            </div>
            <div className="addon">
                +
            </div>
        </div>
        </div>   
      </div>
    </>
  )
}

export default Menucard