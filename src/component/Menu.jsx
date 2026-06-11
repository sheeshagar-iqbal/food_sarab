import React from 'react'
import Cgcard from './Cgcard'
import Menulist from './Menulist'

const Menu = () => {
  return (
    <>
    <div className="menucontainer">

    
        <div className="cgcontain menucontain">
              <div className="wwf">What's Cooking</div>
            <h1 className='cgtitle'>Our Delicious <span>Menu</span></h1>
          
            </div>

            <Menulist/>
   
   </div>
    </>
  )
}

export default Menu