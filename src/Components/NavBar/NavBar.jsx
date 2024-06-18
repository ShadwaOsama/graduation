import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext';
import { CartContext } from '../../Contexts/CartContext';

export default function NavBar() {
  const { userIsLoggedIn} =useContext(authContext)
  const { cartCount } = useContext(CartContext);

  return (

    <Navbar expand="lg" className="bg-transparent py-4 navbar">
      <Container>
        <Link to="/home" className='text-uppercase fw-bolder fs-3'>gaz<span className='logo-color'>ier</span></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-icon">
            {userIsLoggedIn?
              <>
                <Link to="/signup" className=' d-flex justify-content-center align-items-center me-3 fs-5'> SignUp</Link>
                <Link to="/login" className=' d-flex justify-content-center align-items-center me-3 fs-5'> Login</Link>
                </>
               :
               <Link to="/account" className=' d-flex justify-content-center align-items-center me-3 fs-5'> <span className='me-2'><i className="fa-regular fa-circle-user"></i></span>my Account</Link>

          }
            
            <Link to="/Cart" className='d-flex justify-content-center align-items-center fs-5'>
              <span className='me-2 position-relative'>
                <i className="fa-solid fa-cart-shopping"></i>
                {cartCount > 0 && <span className='cart-counter'>{cartCount}</span>}
              </span>
              Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
