import React from "react";
import offer from "../image/offer.jpg";
import { Link } from "react-router-dom";

const Offer = () => {
    const data =Date()
   
  return (
    <>
      <div className="abcontainer" style={{backgroundColor:'#210000'}}>
        
        <div className="abcontain">
          <div className="cgcontain abcontain">
            <div className="wwf ltoff" style={{color:'black',fontSize:'12px', fontWeight:500}}> <i>i</i>Limited Time Offer</div>
            <h1 className="cgtitle offtitle">
             Get 30% Off <br />
Our Signature <br />
<span>Burger</span> Meal
            </h1>
            <div className="cgsub offsub">
              Founded in 2012, Sarab began as a small corner joint with a big dream - to serve food that brings people together. Today we're proud to serve thousands of happy customers every week with the same passion that started it all.
            </div>
          </div>
          <div className="offwatch">
                <div className="offh offt ">
                    <strong>08</strong> <br />
                    <span>hours</span>
                </div>
                <div className="offm offt">
                        <strong>56</strong> <br />
                    <span>minutes</span>
                </div>
                <div className="offm offt">
                      <strong>16</strong> <br />
                    <span>seconds</span>
                </div>
          </div>
          
           <button  className='btnn vfmbtn '>
<i class="fa-solid fa-book"></i>
 Grab the Deal </button>
        </div>
        <div className="abimg ">
           <div className="about1 offerimg">
                      <img src={offer} alt=""  />

            </div>
          <h6 className="imgcon discount">
           <span>$24.99</span>
           <br />
           <p>$17.49</p>
           
          </h6>
          
        </div>
      </div>
    </>
  );
};

export default Offer;
