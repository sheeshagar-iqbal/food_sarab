import React from 'react'
const foods=['Crispy Fried Chicken','Gourmet Burgers','Artisan Pizzas','Fresh Wraps  Rolls','Loaded Fries','Ice Cream Shakes','Grilled Sandwiches','Crispy Fried Chicken','Gourmet Burgers','Artisan Pizzas','Fresh Wraps Rolls','Loaded Fries','Ice Cream Shakes','Grilled Sandwiches','Crispy Fried Chicken','Gourmet Burgers','Artisan Pizzas','Fresh Wraps Rolls','Loaded Fries','Ice Cream Shakes','Grilled Sandwiches','Crispy Fried Chicken','Gourmet Burgers','Artisan Pizzas','Fresh Wraps Rolls','Loaded Fries','Ice Cream Shakes','Grilled Sandwiches']
import m2 from '../image/about1.jpg'
import m1 from '../image/banner-img.jpg'
import m3 from '../image/cg3.jpg'
import m4 from '../image/cg4.jpg'
import m5 from '../image/cg5.jpg'
import m6 from '../image/cg6.jpg'
import m7 from '../image/offer.jpg'



const scr =[m1, m2 ,m3,m4,m5,m6,m7,m1, m2 ,m3,m4,m5,m6,m7,m1, m2 ,m3,m4,m5,m6,m7,m1, m2 ,m3,m4,m5,m6,m7,m1, m2 ,m3,m4,m5,m6,m7]

const Scroller = () => {
  return (
    <>
    <div className="scroll-container">
  <div className="scroll-content">
    {/* <span>Google</span>
    <span>Microsoft</span>
    <span>Amazon</span>
    <span>Meta</span>
    <span>Netflix</span>
    <span>Apple</span> */}
     {scr.map((food, index) => (
      // index % 2!=0 ?
      // <span key={index}><i class="fa-solid fa-dot"></i>{food}</span>:
      <span key={index} > <img src={food} alt=""  /></span>
    
     ))} 
  </div>
</div>
    </>
  )
}

export default Scroller