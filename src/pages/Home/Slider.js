import React from 'react';
import img1 from '../../assests/images/pexels-min-an-1482803.png'
import img2 from '../../assests/images/pexels-taryn-elliott-4502972.jpg'
const Slider = () => {
    return (
        <div>
        <div className="carousel w-full">

            
<div id="slide1" className="carousel-item relative w-full">
<img src={img1} className="w-full carousel-img" alt='img'/>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

<div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-6xl font-bold  text-white'>
                Affordable <br />
                Price for Car <br />
                Servicing
            </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
            <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide4" className="btn btn-circle">❮</a> 
  <a href="#slide2" className="btn btn-circle">❯</a>
        </div>

</div>
</div> 



<div id="slide2" className="carousel-item relative w-full">
<img src={img2} className="w-full" alt='img'/>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide1" className="btn btn-circle">❮</a> 
  <a href="#slide3" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
<img src="https://placeimg.com/800/200/arch" className="w-full"alt='img' />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide2" className="btn btn-circle">❮</a> 
  <a href="#slide1" className="btn btn-circle">❯</a>
</div>
</div> 
</div>
        </div>
    );
};

export default Slider;