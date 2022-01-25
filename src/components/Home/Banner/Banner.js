import React from 'react';
import { Carousel } from "react-bootstrap";
// import './Home.css'
const Banner = () => {
    return (
        <div>
             <div className="banner">
           <Carousel>
          <Carousel.Item>
            <img
              className="d-block d-md-block w-100"
              src="https://media.istockphoto.com/photos/healthcare-workers-portrait-picture-id1284636209?b=1&k=20&m=1284636209&s=170667a&w=0&h=j_vm0DELoS5ZhzbqYAI60nHoO57jHlrGIyLgqBs6Wyg="
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>We take care your healthy life</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid  w-100"
              src="https://media.istockphoto.com/photos/people-walking-in-and-out-of-the-hospital-picture-id1248607560?b=1&k=20&m=1248607560&s=170667a&w=0&h=DJC7KRUXTvR1CubtVU9CJ37w24eP5ND-ia3pXnPmwlA="
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>Best Doctor and medical care</h2>
          
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/production-of-covid19-vaccine-vials-in-cold-storage-picture-id1313536126?b=1&k=20&m=1313536126&s=170667a&w=0&h=3-bDQg-dqc_jQgn2WRP_j0TYwrowJ_LlOuUfbwdgClc="
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>Care whenever you need it</h2>
              
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
           </div>
        </div>
    );
};

export default Banner;