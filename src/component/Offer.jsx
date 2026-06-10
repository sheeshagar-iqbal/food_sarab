import React from "react";
import offer from "../image/offer.jpg";
import { Link } from "react-router-dom";

const Offer = () => {
    const data =Date()
   
  return (
    <>
      <div className="abcontainer">
        
        <div className="abcontain">
          <div className="cgcontain abcontain">
            <div className="wwf">Our Story</div>
            <h1 className="cgtitle">
             Get 30% Off <br /> Our Signature <br /> <span>Burger</span> Meal
            </h1>
            <div className="cgsub">
              Founded in 2012, Sarab began as a small corner joint with a big dream - to serve food that brings people together. Today we're proud to serve thousands of happy customers every week with the same passion that started it all.
            </div>
          </div>
          
           <button  className='btnn vfmbtn '>
<i class="fa-solid fa-book"></i>
 Grab the Deal </button>
        </div>
        <div className="abimg ">
           <div className="about1">
                      <img src={offer} alt=""  />

            </div>
          <h6 className="imgcon">
           
            12 <sup>+</sup> <br /> Year of <br />
            Excellence
          </h6>
          
        </div>
      </div>
    </>
  );
};

export default Offer;
