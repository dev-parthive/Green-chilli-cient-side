import React from 'react';
import img1 from '../../assests/payment/bkash.jpeg'
import img2 from '../../assests/payment/download (1).png'
import img3 from '../../assests/payment/download.png'
import img4 from '../../assests/payment/images.png'
import './Payment.css'
const Payment = () => {
    return (
        <div>
            <h2 className='text-center text-orange-500 text-4xl'>You can pay us Using </h2>
            <div className='payment-img-div'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default Payment;