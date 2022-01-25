import React from 'react';
import {  Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Home/Home/Home.css';

const Service = (props) => {
    const {id, name, image, description } = props.service;
  return (
    <div>
      <div className="container mb-5">
        <Col>
          <Card className="card border-0" style={{backgroundColor: 'rgba(183, 187, 201, 0.076)'}}>
            <Card.Img variant="top" src={image} className="card-img img-fluid mx-auto "/>
            <Card.Body>
              <Card.Title className="mt-1">{name}</Card.Title>
               <p className="dark-grey-text"> {description} </p>
              <NavLink
                  to={`serviceDetail/${id}`}
                > <Button class-name="mx-auto" style={{ backgroundColor:'rgb(98, 114, 160)'}}> View Details</Button>
                </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Service;