import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData()
    const {data} = services
    console.log(data)
    return (
        <div>
            <h2 className='text-center text-4xl py-4 text-orange-600'>All Services</h2>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3'>
                {
                    data.map(product => <ServiceCard key={product._id} product={product}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;