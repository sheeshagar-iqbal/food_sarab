import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
         <div className="ftcontainer">
            <div className="ftcontain">
               <div className="col1">
                  <div className="cl1logo">Sar<span>ab</span></div>
                  <p className="cl1contain">We bring the world's finest flavors together in a fast, friendly, and affordable experience. Every meal crafted with love.</p>
                  <div className="cl1icon">
                     <Link to='#'><i className="fab fa-facebook-f"></i></Link>
                     <Link to='#'><i className="fab fa-instagram"></i></Link>
                     <Link to='#'><i className="fab fa-twitter"></i></Link>
                     <Link to='#'><i className="fab fa-youtube"></i></Link>
                     <Link to='#'><i className="fab fa-tiktok"></i></Link>
                  </div>
               </div>
               <div className="col2">
                  <div className="cltitle">Quick Links</div>
                  <ul className="cllink">
                     <li><Link ><i className="fas fa-chevron-right"></i>Home</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>About Us</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>Our Menu</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>Reservation</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>Blog</Link></li>
                     <li><Link><i className="fas fa-chevron-right"></i>Contact</Link></li>
                  </ul>
               </div>
               <div className="col3">
                  <div className="cltitle">Our Menu</div>
                  <ul className="cllink">
                     <li><Link ><i className="fas fa-chevron-right"></i>Burgers</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>Pizza</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>Fried Chicken</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>Wraps &amp; Rolls</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>Pasta</Link></li>
                     <li><Link ><i className="fas fa-chevron-right"></i>Desserts</Link></li>
                  </ul>
               </div>
               <div className="col4">
                  <div className="cltitle">Get In Touch</div>
                  <div className="cl4info">
                     <div className="cl4icon"><i className="fas fa-map-marker-alt"></i></div>
                     <div className="cl4if"><strong>Address</strong>42 Flavor Street, Manhattan, NY 10001</div>
                  </div>
                  <div className="cl4info">
                     <div className="cl4icon"><i className="fas fa-phone-alt"></i></div>
                     <div className="cl4if"><strong>Phone</strong>+1 (800) 123-4567</div>
                  </div>
                  <div className="cl4info">
                     <div className="cl4icon"><i className="fas fa-envelope"></i></div>
                     <div className="cl4if"><strong>Email</strong>hello@sarabfood.com</div>
                  </div>
                  <div className="cl4info">
                     <div className="cl4icon"><i className="fas fa-clock"></i></div>
                     <div className="cl4if"><strong>Hours</strong>Wed - Sun: 09 AM - 11 PM</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ftcontainer_bottom">
           
               <div className="copyrights">
                  <p>&copy 2026 <span className='sr'>Sarab Restaurant</span>. All Rights Reserved by <Link  className="btp">Bestwpware</Link>. Made with <span><i className="fas fa-heart"></i></span>  <br/>Distributed by <Link  className="btp" >ThemeWagon</Link></p>
                  <div><Link to='#'>Privacy Policy</Link><Link to='#'>Terms</Link><Link to='#'>Cookies</Link></div>
               </div>
           
         </div>
      </footer>
    </>
  )
}

export default Footer