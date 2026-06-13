import React from 'react'
import chef1 from '../image/chef1.jpg'


const Checfcard = ({item}) => {
  // console.log(item.name);
  
  return (
    <>
    <div className="chefscard">
      <img src={item.image} alt="" />
      <div className="medialogo">
        <div className="inst mi ">+</div>
        <div className="face mi">+</div>
        <div className="twit mi">+</div>
      </div>
      <div className="chefinfo">
     
      <h5 className='chefname' >{item.name}</h5>
      <h6 className='chefposition'>{item.title}</h6>
      <p className='experience'>{item.exp}</p>
         
      </div>
    </div>
    </>
  )
}

export default Checfcard