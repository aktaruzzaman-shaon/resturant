import React from 'react';
import bannerbackground from '../../images/bannerbackground.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="img-container">
                <img className='mx-auto img-fluid' src={bannerbackground} alt="Bannerimage" />
            </div>
            <div className="banner-content-container input-group">
                <h2 className='d-block w-100'>Best food waiting for your belly</h2>

                <div className='d-block w-50 mx-auto d-flex'>
                    <input type="text" className="form-control" placeholder="Search food item" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">search</span>
                </div>

            </div>
        </div>
    );
};

export default Banner;