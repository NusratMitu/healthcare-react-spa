import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
    //     <div className="header row sticky-top">
    //     <div className="col-md-4 col-sm-12">
    //         <h2 className='fw-bold text-justify d-block'>MediCare</h2>
    //     </div>
    //     <nav className="col-md-8 col-sm-12 d-md-inline ">
    //         <NavLink className="link" to="/home">Home</NavLink>
    //         <NavLink className="link" to="/doctors">Specialists</NavLink>
    //         <NavLink className="link" to="/services">Services</NavLink>
    //         <NavLink className="link" to="/about">About</NavLink>
    //         { !user?.email && <NavLink  className="link" to="/signin"> Sign In</NavLink>}
    //         { !user?.email && <NavLink  className="link" to="/signup">Sign Up</NavLink> }
    //         {user?.email && <span> Welcome {user.displayName}! </span>}
    //         { user?.email && <Button onClick={logOut} className="btn-regular border-0 text-white">SignOut</Button>  }
    //     </nav>
    // </div>

<Navbar collapseOnSelect expand="lg" className="header" sticky="top" >
  <Container>
  <Navbar.Brand>
  <h2 className='fw-bold'>MediCare</h2>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className=" mx-auto">
      <Nav.Link className="link" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="link" as={HashLink} to="/doctors#doctors">Specialists</Nav.Link>
      <Nav.Link className="link" as={HashLink} to="/services#services">Services</Nav.Link>
      <Nav.Link className="link" as={HashLink} to="/about#about">About</Nav.Link>
      
    </Nav>
    <Nav>
    { !user?.email && <NavLink  className="link" to="/signin"> Sign In</NavLink>}
    { !user?.email && <NavLink  className="link" to="/signup">Sign Up</NavLink> }
    {user?.email && <span> Welcome {user.displayName}! </span>}
    { user?.email && <Button onClick={logOut} className="btn-regular border-0 text-white">SignOut</Button>  }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;