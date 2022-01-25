import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
      <div>
          <Header/>
        <div className="row mx-2 my-5 d-flex align-items-center">
        <   div className="col-lg-7 col-md-12 my-5">
                <h3 className="fw-bold video-title mb-5"> Who we are?</h3>
                <p className="p-3">MediCare is a platform where users can get medical advice from doctors. Our virtual online medical help service provides the ultimate convenience and premier health care. we are proud to be in the Telemedicine industry. Our doctor panel consists of medical Cardiologists, Gastroenterologists and Rheumatologists from US, UK, UAE, India, Singapore, Germany and counting.
                <br /> MediCare upholds the highest standards when approving physicians to practice in the online doctor consultation service. We are adding new doctors by the day. We stringently verify our online doctors to ensure they are fully licensed so that the care we provide will always be of the highest quality. Team-MediCare consists of eminent doctors, researchers and programmers who work round the clock to innovate, create and implement the best web technologies for the use of doctors, users and hospitals.</p>
            </div>
            <div className="col-lg-5 col-md-12 video">
                <img className="img-fluid" src="https://media.istockphoto.com/photos/hospital-management-listening-to-doctor-picture-id872643060?b=1&k=20&m=872643060&s=170667a&w=0&h=AAM7IkSsiaRuJW-ZNlRdyXxQbaHqBzJ18jJ4RtPvQX8=" alt="" srcset="" />
            </div>
            
        </div>
        <hr className="mx-5" />
        <div className="row mx-2 my-5 d-flex align-items-center">
      
            <div className="col-lg-5 col-md-12 video">
            <iframe width="410" height="300" src="https://www.youtube.com/embed/kD_ovC4ltoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-lg-7 col-md-12 my-5">
                <h3 className="fw-bold video-title mb-5"> What we do?</h3>
                <p>We provide various channels to contact our doctors such as posting as a health query or booking a slot for real time face-to-face consultation over HD video and phone. One can use our service to consult with highly qualified physicians at the comfort of your home.
                <br />
                <br />
                Our goal is to provide the highest caliber of online healthcare and to offer a unique service where any patient can receive consultation with any doctors irrespective of their geographical location. Team-MediCare is committed to provide the best services in online healthcare.</p>
            </div>
        </div>
        <Footer/>
      </div>
    );
};

export default About;