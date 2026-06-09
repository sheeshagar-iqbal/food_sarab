import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../App';

const Navbar13 = () => {
  const {Auth ,setAuth,login,setLogin,signup,setSignup}=useContext(Authcontext)
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar13">
      <Container>
        <Navbar.Brand href="#home">
            <div className="blogo">
                <div className="bicon"><i className="fas fa-utensils">
            </i></div>
            <div>
                   <div className="bname">Sar<span>ab</span></div>
            <div className="bsub">FAST FOOD & RESTAURANT</div>
            </div>
           
                </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to=''  >Home</Nav.Link>
            <Nav.Link as={Link} to=''  >About</Nav.Link>
            <Nav.Link as={Link} to=''  >Menu</Nav.Link>
            <Nav.Link as={Link} to=''  >Chefs</Nav.Link>
            <Nav.Link as={Link} to=''  >Resevation</Nav.Link>
            <Nav.Link as={Link} to=''  >Reviews</Nav.Link>
            <Nav.Link as={Link} to=''  >Contact</Nav.Link>
           
          </Nav>

          {(!Auth)?(
              <Nav className='flexitem'>
            <Nav.Link as={Link} to='/signup' onClick={()=>setSignup(true)}><div className="btn"><button>Signup</button></div></Nav.Link>
            <Nav.Link as={Link} to='/login' onClick={()=>setLogin(true)} >
              <div className='btn'><button>Login</button></div>
              </Nav.Link>
          </Nav>
          ):
          (
              <Nav className='flexitem'>
            <Nav.Link as={Link} to='' ><div><i className="fa-solid fa-magnifying-glass"></i></div></Nav.Link>
            <Nav.Link as={Link} to='' >
              <div className='btn'><button><i className="fa-solid fa-bag-shopping"></i> Order Now</button></div>

              
            </Nav.Link>
          </Nav>
          )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default Navbar13