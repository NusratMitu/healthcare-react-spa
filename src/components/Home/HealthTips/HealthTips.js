import React from 'react';
// import './Home.css'
const HealthTips = () => {
    return (
        <div>
            <h2 className="fs-1 fw-bold services-title py-3">Health Tips</h2>
      <div className="d-lg-flex justify-content-center d-md-block ms-3">
        <div className="mx-2">
        <h5 className="text-start py-3">Health Tips for Diabetes Patients</h5> 
      <ul>
        <li className="text-start fs-5">Lose extra weight</li>
        <li className="text-start fs-5 ">Be more physically active</li>
        <li className="text-start fs-5">Eat healthy plant foods</li>
        <li className="text-start fs-5 "> Eat healthy fats</li>
        <li className="text-start fs-5 ">Skip fad diets and make healthier choices</li>
      </ul>
        </div>
        <div className="mx-2">
        <h5 className="text-start py-3">Health Tips for Cardiac Patients</h5>
      <ul>
        <li className="text-start fs-5">Get active each week</li>
        <li className="text-start fs-5">Don’t smoke and avoid secondhand smoke</li>
        <li className="text-start fs-5"> Shed excess weight</li>
        <li className="text-start fs-5">Avoid overeating through portion control</li>
        <li className="text-start fs-5">Eat cholesterol-friendly foods</li>
      </ul>
        </div>
        <div className="mx-2">
        <h5 className="text-start py-3">Health Tips for Cancer Patients</h5>
      <ul>
        <li className="text-start fs-5">Don’t Smoke</li>
        <li className="text-start fs-5">Avoid Secondhand Smoke</li>
        <li className="text-start fs-5">Maintain a Healthy Weight</li>
        <li className="text-start fs-5">Eat a Healthy Diet</li>
        <li className="text-start fs-5">Get Screening Tests and Go to Your Regular Check-Ups</li>
        <li className="text-start fs-5">Stay Connected With Friends, Family, and Other Survivors</li>
      </ul>
        </div>
      </div>
      <hr className=" mx-3 my-5" />
        </div>
    );
};

export default HealthTips;