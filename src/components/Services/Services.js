import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import '../Home/Home/Home.css';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useServices from '../../hooks/useServices';
const Services = () => {
  const services  = useServices();
    return (
        <div id = "services">
            <Header></Header>
            <h2 className="fs-1 fw-bold services-title py-3">Our Popular Services</h2>
            <Row xs={1} md={1} lg={3} className="g-3 w-100 services">
            {
                services.map( service => (
                <Service key={service.id} service={service}></Service>
                ))
            }
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Services;