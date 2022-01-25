import React, { useEffect, useState }  from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("fakedata/doctors.json")
    .then((res) => res.json())
    .then((data) => setDoctors(data));
  }, [])
    return (
      <div>
        <Header/>
      <h2 className="fs-1 fw-bold services-title py-3">Our Specialists</h2>
      <Row xs={1} md={1} lg={3} className="g-3 w-100 services">
       {
         doctors.map( doctor => (
           <Doctor doctor={doctor}></Doctor>
        ))
       }
      </Row>
      <Footer/>
      </div>
    );
};

export default Doctors;