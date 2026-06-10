import React from "react";
import about1 from "../image/about1.jpg";
import about2 from "../image/about2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="abcontainer">
        <div className="abimg ">
           <div className="about1">
                      <img src={about1} alt=""  />

            </div>
          <h6 className="imgcon">
           
            12 <sup>+</sup> <br /> Year of <br />
            Excellence
          </h6>
          <img src={about2} alt="" className="about2" />
        </div>
        <div className="abcontain">
          <div className="cgcontain abcontain">
            <div className="wwf">Our Story</div>
            <h1 className="cgtitle">
             We Invite You to Visit <br /> Our <span>Food Restaurant</span>
            </h1>
            <div className="cgsub">
              Founded in 2012, Sarab began as a small corner joint with a big dream - to serve food that brings people together. Today we're proud to serve thousands of happy customers every week with the same passion that started it all.
            </div>
          </div>
          <div className="abi">
            <div className="abinfo">
                <div className="abii"><i class="fa-solid fa-leaf"></i></div>
                <div className="abic">
                    <h6>100% Fresh Ingredients</h6>
                    <p>We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness.</p>
                </div>
            </div>
             <div className="abinfo">
                <div className="abii"><i class="fa-solid fa-award"></i></div>
                <div className="abic">
                    <h6>Award-Winning Recipes</h6>
                    <p>Our signature recipes have won national culinary awards 5 years in a row.</p>
                </div>
            </div>
             <div className="abinfo">
                <div className="abii"><i class="fas fa-shipping-fast"></i></div>
                <div className="abic">
                    <h6>Lightning-Fast Delivery</h6>
                    <p>Order online and get hot, fresh food at your door in under 25 minutes, guaranteed.</p>
                </div>
            </div>
            <button  className='btnn vfmbtn '>
<i class="fa-solid fa-book"></i>
 View Full Menu </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
