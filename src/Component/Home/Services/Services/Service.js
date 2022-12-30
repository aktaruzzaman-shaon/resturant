import React from 'react';
import service1 from '../../../../images/Sevice/service1.png'

const Service = () => {
    return (
        <div>
            <div>
                <h2>Why you choose us</h2>
                <p>Barton waited tewnty always repair in within we do. An delightes offending curiosity my is dashwoods st . prosperous incresasding surrounded.</p>
            </div>
            <div>
                <div className="img">
                    <img src={service1} alt="" />
                </div>
                <div className="service-description">
                    <h4>Fast Delivery</h4>
                    <p>
                        Barton waited tewnty always repair in within we do. An delightes offending curiosity my is dashwoods st . prosperous incresasding surrounded.
                    </p>
                </div>
                <div>
                    <span>See more</span>
                </div>
            </div>
        </div>
    );
};

export default Service;