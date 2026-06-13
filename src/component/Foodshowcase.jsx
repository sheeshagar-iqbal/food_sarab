import React from 'react'
import img1 from '../image/showcase1.jpg'
import img2 from '../image/showcase2.jpg'
import img3 from '../image/showcase3.jpg'
import img4 from '../image/showcase4.jpg'
import img5 from '../image/showcase5.jpg'

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
                  <img src={img1} alt="" />
                  
                </div>
                <div className="fsc2">
                  <img src={img2} alt="" />
                </div>
                <div className="fsc3">
                  <img src={img3} alt="" />
                </div>
                <div className="fsc4">
                  <img src={img4} alt="" />
                </div>
                <div className="fsc5">
                  <img src={img5} alt="" />
                </div>
                
            </div>
    </div>
  

            
   
    </>
      )
}

export default Foodshowcase