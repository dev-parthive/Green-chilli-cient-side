import React from 'react';
import './GridGallery.css'
import img1 from '../../assests/dish/pexels-cottonbro-studio-4877838.jpg'
import img2 from '../../assests/dish/pexels-kristina-paukshtite-1146760.jpg'
import img3 from '../../assests/dish/pexels-meruyert-gonullu-7469289.jpg';
import img4 from '../../assests/dish/pexels-mouktik-joshi-9646845.jpg';
import img5 from '../../assests/dish/pexels-rajesh-tp-1633578.jpg';
import img6 from '../../assests/dish/pexels-saveurs-secretes-7394819.jpg';
import img7 from '../../assests/dish/sam-moghadam-khamseh-VpOpy6QrDrs-unsplash.jpg';
import img8 from '../../assests/images/pexels-eiliv-aceron-6896063.jpg'
import img9 from '../../assests/images/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.webp'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const GridGallery = () => {
    return (
        <div className='img-gallaery'>
         <PhotoProvider>
            <PhotoView src={img1}>
            <img src={img1} alt="" />
            </PhotoView>
         </PhotoProvider>
         <PhotoProvider>
            <PhotoView src={img2}>
            <img src={img2} alt="" />
            </PhotoView>
         </PhotoProvider>
         <PhotoProvider>
            <PhotoView src={img3}>
            <img src={img3} alt="" />
            </PhotoView>
         </PhotoProvider>
         <PhotoProvider>
            <PhotoView src={img4}>
            <img src={img4} alt="" />
            </PhotoView>
         </PhotoProvider>
         <PhotoProvider>
            <PhotoView src={img5}>
            <img src={img5} alt="" />
            </PhotoView>
         </PhotoProvider>
         <PhotoProvider>
            <PhotoView src={img6}>
            <img src={img6} alt="" />
            </PhotoView>
         </PhotoProvider>
         <PhotoProvider>
            <PhotoView src={img7}>
            <img src={img7} alt="" />
            </PhotoView>
         </PhotoProvider>
         <PhotoProvider>
            <PhotoView src={img8}>
            <img src={img8} alt="" />
            </PhotoView>
         </PhotoProvider>
         <PhotoProvider>
            <PhotoView src={img9}>
            <img src={img9} alt="" />
            </PhotoView>
         </PhotoProvider>
          

        </div>
    );
};

export default GridGallery;