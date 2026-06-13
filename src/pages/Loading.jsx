import React from 'react'
import Home from '../component/Home'
import Scroller from '../component/Scroller'
import Category from '../component/Category'
import About from '../component/About'
import Offer from '../component/Offer'
import Foodshowcase from '../component/Foodshowcase'
import Menu from '../component/Menu'
import Chefs from '../component/Chefs'
import Opening_Hours from '../component/Opening_Hours'
import Reservation from '../component/Reservation'
import Review from '../component/Review'
import Footer from '../component/Footer'

const Loading = () => {
  return (
    <>
    <section id='home'>
        <Home/>
        <Scroller />
        <Category/>

    </section>
    <section id='about'>
      <About/>
    </section>
    <section id='menu'>
        <Menu/>
        <Offer/>
         <Foodshowcase/>
    </section>
    <section id='chefs'>
             <Chefs/>
            <Opening_Hours/>
    </section>
    <section id='review'>
      {/* <Review/> */}
    </section>
    <section id='resevation'>
      {/* <Reservation/> */}
                
    </section>
    
        <section id='contact'>
      {/* <Footer/> */}

        </section>
     
    </>
  )
}

export default Loading