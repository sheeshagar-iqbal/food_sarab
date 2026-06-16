import React from "react";
// import about1 from '../image/menu1.jpg'
import { useState } from "react";

const Menucard = ({ item }) => {
  const [menuItems, setMenuItems] = useState(item);
  // const [like,setLike] =useState(false)

  const toggleFavorite = (id) => {
    console.log(id);
    setMenuItems(
      menuItems.map((data) =>
        // console.log(data)
        
        data.id === id ? { ...data, favorite:data.favorite } : data,
        

      ),
    );
    // setMenuItems(menuItems)
    console.log(menuItems['favorite']);
    
    console.log(menuItems)

  };

  return (
    <>
      {menuItems.map((value) => (
        <div className="menucard" key={value.id}>
          <img src={value.image} alt="" />
          <div className="top">
            <p>
              <i class="fa-solid fa-star"></i>
              {value.badge}
            </p>
          </div>
          <div
            className="topstar"
            onClick={() => toggleFavorite(value.id)}
            style={{ color: value.like ? "red" : "white" }} 
          >
            {/* {value.favorite ? ( */}
              <i className="fa-solid fa-heart"></i>
            {/* // ) : (
            //   <i className="fa-regular fa-heart"></i>
            // )   
            // } */}
            {console.log(value.favorite)}
          </div>

          <div className="menuinfo">
            <h6>{value.category}</h6>
            <h5>{value.title}</h5>
            <p>{value.description}</p>

            <div className="ratestar">
              <div className="rate">
                <h2>
                  <sup>$</sup>
                  {value.price} <span>{value.oldPrice}</span>
                </h2>
                <p>
                  <i class="fa-solid fa-star"></i> {value.rating}
                </p>
              </div>
              <div className="addon">+</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Menucard;
