import React from 'react'
import Cgcard from './Cgcard'

import cg1 from '../image/cg1.jpg'
import cg2 from '../image/cg2.jpg'
import cg3 from '../image/cg3.jpg'
import cg4 from '../image/cg4.jpg'
import cg5 from '../image/cg5.jpg'
import cg6 from '../image/cg6.jpg'

const food_category=[
    { cg:cg1,cgtitle:'All Items',cgitem:'99 item'},
    { cg:cg2,cgtitle:'Burgers',cgitem:'24 item'},
    { cg:cg3,cgtitle:'Pizza',cgitem:'18 item'},
    { cg:cg4,cgtitle:'Fried Chicken',cgitem:'15 item'},
    { cg:cg5,cgtitle:'Wraps',cgitem:'12 item'},
    { cg:cg6,cgtitle:'Desserts',cgitem:'20 item'}
]

const Cglist = () => {
  return (
    <>
    <div className='cglist'>

        {food_category.map((value,index)=>(
                        <Cgcard key={index} item={value}/>
        ))}
    
    </div>
    </>
  )
}

export default Cglist