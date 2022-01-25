import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'
// import '../Header/Header.css';
const NotFound = () => {
    return (
        <div>
            <img className='img-fluid mb-3' src={notfound} alt="" srcset="" />
            <Link to='/'>
            <Button className="mx-auto btn-regular" > Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;