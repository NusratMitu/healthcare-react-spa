import React from 'react';
// import { Button, Form } from 'react-bootstrap';
import './Appointment.css';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const {user} = useAuth();
  
    
    return (
        <>
        <Header></Header>
        <div className="appointment-container pb-5">
            <h4 className="mx-5 py-5 ">Please Fill Up The Form to Make Your Appointment</h4>
            <form onSubmit={(e) => {e.preventDefault();
            alert('Your appoinment have been listed successfully');
            }} className="ms-5">
                <label for="name">Paient's name</label><br/>
                <input required defaultValue={user.displayName}  className="my-2 w-75 p-1 rounded border-1" type="text" name="" id=""/>
                <br />
                <label for="age">Paient's Age</label><br/>
                <input required className="my-2 w-75  p-1 rounded border-1" type="text" name="" id=""/>
                <br />
                <label for="exampleFormControlTextarea1" className="mb-2">Select Gender</label>
                <div className="custom-control custom-radio">
                <input required type="radio" id="customRadio1" name="customRadio" className="custom-control-input ms-3" />
                <label className="custom-control-label ps-1" for="customRadio1">Male</label>
                </div>
                <div class="custom-control custom-radio">
                <input required type="radio" id="customRadio2" name="customRadio" className="custom-control-input ms-3"/>
                <label className="custom-control-label ps-1" for="customRadio2"> Female</label>
                </div>
                <select required className="custom-select w-75 my-2 p-1 rounded border-1 border-secondary">
                <option  selected className="text-light">Select Specialist</option>
                <option value="1">Cardiologists</option>
                <option value="2">Gastroenterologists</option>
                <option value="3">Ophthalmologists</option>
                <option value="4">Neurologists</option>
                <option value="5">Dermatologists</option>
                <option value="6">Medicine Specialists</option>
                <option value="7">Psychiatrists</option>
                <option value="8">General Surgeons</option>
                <option value="9">Rheumatologists</option>
                </select>
                <div className="form-group">
                <label for="exampleFormControlTextarea1">Patient's  Problem</label>
                <textarea required className="form-control my-2 w-75 p-1 rounded border-1 border-secondary" id="exampleFormControlTextarea1" placeholder="notes.." rows="3"></textarea>
                </div>
                <label for="exampleFormControlTextarea1">Appointment Date</label>
                <DatePicker className="my-2 w-75 p-1 rounded border-1 border-secondary" selected={date} onChange={date => setDate(date)} />
                <label for="number">Contact Number</label><br/>
                <input type="number" required className="my-2 w-75 p-1 rounded border-1" name="" id=""/> <br />
                <input className="p-2 my-2 rounded border-1" type="submit" value="Take Appointment" />
            
            </form>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Appointment;