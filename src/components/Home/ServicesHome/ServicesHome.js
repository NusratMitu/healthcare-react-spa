import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Service from '../../Service/Service';
import '../../Header/Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useServices from '../../../hooks/useServices';
const ServicesHome = () => {
  const services  = useServices();
    return (
        <div>
            <h2 className="fs-1 fw-bold services-title py-3">Our Popular Services</h2>
            <Row xs={1} md={1} lg={3} className="g-3 w-100 services">
            {
                services.slice(0,6).map( service => (
                <Service key={service.id} service={service}></Service>
                ))
            }
            </Row>

            <Link to='/services'>
            <Button class-name="mx-auto" style={{ backgroundColor:'rgb(98, 114, 160)'}}> See More</Button>
            <hr className=" mx-3 my-5" />
            </Link>
        </div>
    );
};

export default ServicesHome;