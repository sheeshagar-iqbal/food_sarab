import React from 'react'
// import Cheflist from './Cheflist'
import CircularGallery from './CircularGallery'

const Chefs = () => {
  return (
    <>
    <div className="chefcontainer">
      <div className="cgcontain chefcontain">
              <div className="wwf">The Culinary Team</div>
            <h1 className='cgtitle'>Meet Our Expert <span>Chefs</span></h1>
          
            </div>
                {/* <Cheflist/> */}
                          <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery
    bend={1}
    textColor="#ffffff"
    borderRadius={0.05}
    scrollEase={0.05}
    // Optionally load a custom font for the labels.
    // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
    fontUrl=""
    font="bold 30px Orbitron"
    scrollSpeed={2}
/>
</div>


    </div>
    
    </>
  )
}

export default Chefs