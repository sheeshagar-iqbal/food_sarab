import React from "react";
import about1 from "../image/about1.jpg";
import about2 from "../image/about2.jpg";

const About = () => {
  return (
    <>
      <div className="abcontainer">
        <div className="abimg ">
          <img src={about1} alt=""  className="about1"/>
          <h6>
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
                    <h4>100% Fresh Ingredients</h4>
                    <p>We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness.</p>
                </div>
            </div>
             <div className="abinfo">
                <div className="abii"><i class="fa-solid fa-award"></i></div>
                <div className="abic">
                    <h4>Award-Winning Recipes</h4>
                    <p>Our signature recipes have won national culinary awards 5 years in a row.</p>
                </div>
            </div>
             <div className="abinfo">
                <div className="abii"><i class="fas fa-shipping-fast"></i></div>
                <div className="abic">
                    <h4>Lightning-Fast Delivery</h4>
                    <p>Order online and get hot, fresh food at your door in under 25 minutes, guaranteed.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
