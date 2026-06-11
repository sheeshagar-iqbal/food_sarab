import React from 'react'
import chef1 from '../image/chef1.jpg'

const Checfcard = () => {
  return (
    <>
    <div className="chefscard">
      <img src={chef1} alt="" />
      <div className="medialogo">
        <div className="inst mi ">+</div>
        <div className="face mi">+</div>
        <div className="twit mi">+</div>
      </div>
      <div className="chefinfo">
     
      <h5 className='chefname' >lorem</h5>
      <h6 className='chefposition'>lorem</h6>
      <p className='experience'>12 year</p>
         
      </div>
    </div>
    </>
  )
}

export default Checfcard