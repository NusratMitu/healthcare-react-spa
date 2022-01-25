import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import '../Service/Service.css'
const Doctor = (props) => {
    const { name, image, specialties } = props.doctor;
    const history = useHistory();
    const handleAppointment = () => {
        history.push('/appointment');
    }
    return (
    <div>
    <div className="container mb-5">
      <Col>
        <Card className="card border-0" style={{height:"420px"}}>
          <Card.Img variant="top" src={image} className="card-img img-fluid p-2 mx-auto"/>
          <Card.Body>
            <Card.Title className="">{name}</Card.Title>
             <p className="dark-grey-text text-center"> {specialties} </p>
            <Button onClick={handleAppointment} className="btn btn-regular border-0 p-2 mb-2 mx-auto">Request an Appoinment >></Button>
          </Card.Body>
          
          
        </Card>
      </Col>
    </div>
  </div>
    
    );
};

export default Doctor;