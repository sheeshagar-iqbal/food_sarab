import React from 'react'

const Cgcard = ({item}) => {
    // console.log(item);
    
  return (
    <>
     <div className="cgcard" data-aos="zoom-in" data-aos-delay="0">
   
    <div className="card" >
                     <img className="cgimg" src={item.cg} alt=""/>
                     <div className="cgnm">{item.cgtitle}</div>
                     <div className="cgitem">{item.cgitem}</div>
                  </div>
    
    
    

                  
               </div>
    </>
  )
}

export default Cgcard