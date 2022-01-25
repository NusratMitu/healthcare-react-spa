import React from 'react';
import { Button} from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Signin.css';


const Signin = () => {
    const {handleSignIn, handleEmailChange, handlePassChange, signInUsingGoogle, setUser, error, setError, handleResetPassword, logOut, setIsLoading} =  useAuth();
    const location = useLocation();
    // console.log('came from', location.state?.from);
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';
    
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then((result) => {
                history.push(redirect_uri);
            })
        .finally(() => setIsLoading(false))    
    }
    
    return (
       <>
       <Header></Header>
       <div className="form-section my-3">
            <div>
                <img className="" srcSet="https://media.istockphoto.com/photos/healthcare-workers-portrait-picture-id1284636209?b=1&k=20&m=1284636209&s=170667a&w=0&h=j_vm0DELoS5ZhzbqYAI60nHoO57jHlrGIyLgqBs6Wyg=" alt=""  />
            </div>
            <div className="form-container my-3 ">
            <h2 className="my-3 d-block text-center">Please Sign In</h2>
            <form onSubmit={(e) => {
                  e.preventDefault();
                  handleSignIn()
                    .then((result) => {
                    //   setUser(result.user);
                      history.push(redirect_uri);
                      
                    })
                    .catch((err) => {
                      setError(err.message);
                    })
                    .finally(() => setIsLoading(false))
                }}>
                <input onBlur={handleEmailChange} className="w-75 my-2 p-2 rounded border-1" type="text" name="" id="email" placeholder="Enter Your Email" required/>
                <br />
                <input onBlur={handlePassChange} className="w-75 my-2 p-2 rounded border-1" type="password" name="" id="pass" placeholder="Enter Your password" required/>
                <br />
                <div className="text-danger">{error}</div>
                <input className="my-2 w-50 p-2  rounded border-1 border-secondary" id="submit" type="submit" value="Sign In" />
            </form>
            <Button className="btn-regular mx-auto mb-2 w-50 p-2 d-block" onClick= {handleResetPassword}
             >Reset Password</Button>
            <Button className="btn-regular mx-auto w-50 p-2" onClick= {handleGoogleSignIn}
             >Google Sign In</Button>
            <p className="text-center mt-3">new to MediCare? <Link to="/signup">Create Account</Link></p>
            </div>
        </div>
       <Footer></Footer>
       </>
    );
};

export default Signin;