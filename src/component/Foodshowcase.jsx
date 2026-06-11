import React from 'react'
import img from '../image/about1.jpg'

const Foodshowcase = () => {
  return (
    <>
    <div className="fsccontainer">
  <div className="cgcontain fsccontain ">
              <div className="wwf">Food Showcase</div>
            <h1 className='cgtitle'>Let's See Our <span> Fast Food</span></h1>
            </div>
            <div className="fscard">
                <div className="fsc1">
                  <img src={img} alt="" />
                </div>
                <div className="fsc2">
                  <img src={img} alt="" />
                </div>
                <div className="fsc3">
                  <img src={img} alt="" />
                </div>
                <div className="fsc4">
                  <img src={img} alt="" />
                </div>
                <div className="fsc5">
                  <img src={img} alt="" />
                </div>
                
            </div>
    </div>
  

            
   
    </>
      )
}

export default Foodshowcase