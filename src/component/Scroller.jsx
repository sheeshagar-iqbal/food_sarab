import React from 'react'

const Scroller = () => {
  return (
    <>
    <div className="scroll-container">
  <div className="scroll-content">
    <span>Google</span>
    <span>Microsoft</span>
    <span>Amazon</span>
    <span>Meta</span>
    <span>Netflix</span>
    <span>Apple</span>
     {/* {companies.map((company, index) => (
      <span key={index}>{company}</span>
    ))} */}
  </div>
</div>
    </>
  )
}

export default Scroller