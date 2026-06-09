import React from 'react'
import Cglist from './Cglist'

const Category = () => {
  return (
    <>
    <div className="category">
        <div className="cgcontainer">
            <div className="cgcontain">
              <div className="wwf">What We Offer</div>
            <h1 className='cgtitle'>Browser by <span>Category</span></h1>
            <div className='cgsub'>From sizzling burgers to exotic world cuisines - find your  <br /> favourite in our menu</div>
            </div>

            <div >
                <Cglist/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Category