import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../Signin/Signin.css'
 
const Signup = () => {

    const {handleSignUp, handleEmailChange, handlePassChange, handleNameChange, passwordValidation, verifyEmail, error, setError, setUserName, logOut} =  useAuth();

    const history = useHistory();
      
    return (
       <>
       <Header></Header>
       <div className="form-section my-3">
            <div className="form-container">
                <h2 className="my-3 d-block text-center">Create Your Account</h2>
                
            <Form onSubmit={(e) => {
                 e.preventDefault();
                 passwordValidation();
                handleSignUp()
                .then((result) => {
                    setError("");
                    setUserName();
                    verifyEmail();
                    alert("Registration has been successful! Please Login");
                    logOut();
                    history.push("/signin");
                    })
                    .catch( (error) => {
                    setError(error.message);
                    })
            }} className="w-75 mb-2 mx-auto" >
            <Form.Group className="mb-2" controlId="formGridName">
                <Form.Control onBlur={handleNameChange} placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control onBlur={handleEmailChange} className="mb-2"  type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted ">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group  controlId="formBasicPassword">
                <Form.Control onBlur={handlePassChange} className="my-2" type="password"  controlid="pass" placeholder="Password" required/>
            </Form.Group>
            <Form.Group onBlur={handlePassChange} controlId="formBasicPassword">
                <Form.Control  className="mb-2" controlid="pass-confirm" type="password" placeholder="Re-enter Password" required/>
            </Form.Group>
            <div className="text-danger"> {error}</div>
            <Button variant="primary" type="submit" className="btn-regular mx-auto w-50 p-2">
                Sign Up
            </Button>
            </Form>
            <p className="text-center">Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
        <div>
            <img className="d-block mx-auto " srcSet="https://media.istockphoto.com/photos/modern-keyboard-with-blue-online-registration-button-picture-id1268691831?b=1&k=20&m=1268691831&s=170667a&w=0&h=IIBnyOXxCfPeft3R_RDna89ced94KSPoCQ5NDb__4zc=" alt=""  />
        </div>
        </div>
       <Footer></Footer>
       </>
    );
};

export default Signup;

/* <form onSubmit={handleSignUp}>
                <input className="w-75 my-2 p-2 rounded border-1" type="text" name="" id="mail" placeholder="Enter Your Email"/>
                    <br />
                    <input className="w-75 my-2 p-2 rounded border-1" type="password" name="" id="pass" placeholder="Enter Your password"/>
                    <input className="w-75 my-2 p-2 rounded border-1" type="password" name="" id="confirm-pass" placeholder="Re-enter Your password"/>
                    <br />
                    <input className="my-2 w-50 p-2  rounded border-1 border-secondary" type="submit" value="Sign Up" />
                </form> */
