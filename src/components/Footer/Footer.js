import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About MediCare</span> MediCare is a platform where users can get medical advice from doctors. Our virtual online medical help service provides the ultimate convenience and premier health care. 
    </p>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div className="me-5">
      <i className="fa fa-envelope"></i>
      <p><a href="https://mail.google.com" target="_blank"> career@medicare.com</a></p>
    </div>
    <div className="me-5 pe-4">
    <i className="fas fa-phone-alt"></i>
      <p> (+880) 1700000000</p>
    </div>
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> O.R. Nizam Rd, GEC Circle</span> Chittagong, Bangladesh</p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2 className='fw-bold text-justify d-block'>MediCare</h2>
    <p className="menu">
      <NavLink className="link" to="/home">Home</NavLink> <br />
      <NavLink className="link" to="/doctors">Specialists</NavLink> <br />
      <NavLink className="link" to="/services">Services</NavLink>
      <br />
      <NavLink className="link" to="/about">About</NavLink>
    </p>
    <div className="icons mb-3">
      <a href="https://www.facebook.com/nusrat.mitu.52/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
      <a href="https://www.linkedin.com/in/nusrat-mitu/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
      <a href="https://github.com/NusratMitu" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer"><i className="fa fa-google-plus"></i></a>
    </div>
    <p className="name"> MediCare &copy; 2022</p>
  </div>
</footer>
    );
};

export default Footer;