import React from 'react';
import CountUp from 'react-countup';
import './Counter.css';

const Counter = () => {
    return (
        <div className="counter-container py-5 d-lg-flex justify-content-center align-items-center">
            <div className="px-5 py-3 mx-3 single-counter">
                <CountUp
                start={0}
                end={34}
                duration={4}
                /> 
                <h3 className="pe-5">Specialists</h3>   
            </div>
            <div className="px-5 py-3 mx-3 single-counter">
                <CountUp
                start={0} 
                end={21}
                duration={4}
                />
                <h3 className="pe-5">Services</h3>   
            </div>
            <div className="px-5 py-3 mx-3" style={{fontSize:'90px' }}>
                <CountUp
                start={0}
                end={1000}
                duration={4}
                /> 
                <h3 className="pe-5">Patients</h3>   
            </div>
      
        </div>
    );
};

export default Counter;
