import React from 'react'
import Checfcard from './Checfcard'
import chef1 from '../image/chef1.jpg'
import chef2 from '../image/chef2.jpg'
import chef3 from '../image/chef3.jpg'
import chef4 from '../image/chef4.jpg'

const data=[
  {
    image:chef1,
    name:'Alice Mortal',
    title:'Head Chef',
    exp:'12 years experience'
  },
  {
    image:chef2,
    name:'Michael Corn',
    title:'Grill Master',
    exp:'8 years experience'
  },
  {
    image:chef3,
    name:'Faz Chowdel',
    title:'Pastry Chef',
    exp:'10 years experience'
  },
  {
    image:chef4,
    name:'William Latnum',
    title:'Pizza Artisan',
    exp:'9 years experience'
  }
]


const Cheflist = () => {
  return (
    <>
    <div className="cheflist">
     {data.map((value,index)=>(
                        <Checfcard key={index} item={value}/>
        ))}
   
    </div>
   
    </>
  )
}

export default Cheflist





// import React from "react";
// import CircularGallery from "./CircularGallery";

// const Cheflist = () => {
//   const items = [
//     {
//       image: chef1,
//       text: "Alice Mortal"
//     },
//     {
//       image: chef2,
//       text: "Michael Corn"
//     },
//     {
//       image: chef3,
//       text: "Faz Chowdel"
//     },
//     {
//       image: chef4,
//       text: "William Latnum"
//     }
//   ];

//   return (
//     <div style={{ height: "600px" }}>
//       <CircularGallery items={items} />
//     </div>
//   );
// };

// export default Cheflist;