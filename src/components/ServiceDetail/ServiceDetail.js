import React from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useServices from '../../hooks/useServices';
import '../Header/Header.css';
const ServiceDetail = () => {
  const {serviceId} = useParams();
  const services  = useServices();
//   console.log(services);
  const selectedService = services.find(
    service => service.id == serviceId
  );
//   console.log(selectedService?.id);
    return (
        <div>
          <Header/>
          {/* <h3>hi from {serviceId}</h3> */}
            <h1 className="p-3 fw-bold">What do {selectedService?.name} do?</h1>
            <div className="row mx-2  d-flex align-items-center">
                <div className="col-lg-5 col-md-12">
                <img className="img-fluid" src={selectedService?.image} alt="" srcset="" />
                </div>
                <div className="col-lg-7 col-md-12 ">
                <p>{selectedService?.detail}</p>
                </div>
            </div>
            <br />
            <Link to='/services'>
            <Button className="mx-auto btn-regular"> Go Back</Button>
            <hr className=" mx-3 my-5" />
            </Link>
            <Footer/>
        </div>
    );
};

export default ServiceDetail;
