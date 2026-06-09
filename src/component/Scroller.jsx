import React from 'react'
const foods=['Crispy Fried Chicken','Gourmet Burgers','Artisan Pizzas','Fresh Wraps  Rolls','Loaded Fries','Ice Cream Shakes','Grilled Sandwiches','Crispy Fried Chicken','Gourmet Burgers','Artisan Pizzas','Fresh Wraps Rolls','Loaded Fries','Ice Cream Shakes','Grilled Sandwiches','Crispy Fried Chicken','Gourmet Burgers','Artisan Pizzas','Fresh Wraps Rolls','Loaded Fries','Ice Cream Shakes','Grilled Sandwiches','Crispy Fried Chicken','Gourmet Burgers','Artisan Pizzas','Fresh Wraps Rolls','Loaded Fries','Ice Cream Shakes','Grilled Sandwiches']

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
     {foods.map((food, index) => (
      <span key={index}><i class="fa-solid fa-dot"></i>{food}</span>
    ))}
  </div>
</div>
    </>
  )
}

export default Scroller