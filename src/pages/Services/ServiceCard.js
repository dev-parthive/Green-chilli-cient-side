import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ServiceCard = ({product}) => {
    const {img, description, rating, price, name} = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} style={{height: '200px'}} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.length > 100 ? <> {description.slice(1,100)} <span>...</span></> : description }</p>
          <div className='w-full flex flex-col justify-around items-center'>
            <div className='mb-4'><span className=' text-xl'>price</span>: $ <span className='text-orange-600'>{price}</span></div>
            <div className='flex justify-between items-center'><p className='mr-1'>{rating}</p> <p><FaStar style={{color:'goldenrod'}}></FaStar></p><p><FaStar style={{color:'goldenrod'}}></FaStar></p><p><FaStar style={{color:'goldenrod'}}></FaStar></p><p><FaStar style={{color:'goldenrod'}}></FaStar></p><p><FaStarHalfAlt style={{color:'goldenrod'}}></FaStarHalfAlt></p></div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;