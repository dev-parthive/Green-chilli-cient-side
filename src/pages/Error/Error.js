import React from 'react';
import { Link } from 'react-router-dom';
import erro from '../../assests/images/5203299.jpg'
const Error = () => {
    return (
        <div>
            <button className='btn btn-outline btn-accent mb-10  block mx-auto'><Link to="/">Go to home </Link></button>
            <img src={erro} alt="" />
        </div>
    );
};

export default Error;