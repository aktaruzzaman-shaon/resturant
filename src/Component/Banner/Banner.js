import React from 'react';
import bannerbackground from '../../images/bannerbackground.png'

const Banner = () => {
    return (
        <div>
            <img className='mx-auto img-fluid' src={bannerbackground} alt="Bannerimage" />
        </div>
    );
};

export default Banner;