import React from 'react';
import service1 from '../../../../images/Sevice/service1.png'
import service2 from '../../../../images/Sevice/Service2.png'
import service3 from '../../../../images/Sevice/Service3.png'

const Service = () => {
    return (
        <div>
            <div>
                <h2>Why you choose us</h2>
                <p>Barton waited tewnty always repair in within we do. An delightes offending curiosity my is dashwoods st . prosperous incresasding surrounded.</p>
            </div>
            <div className="serviceDetail d-flex container">
                <div>
                    <div className="img">
                        <img className='w-75' src={service1} alt="" />
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
                <div>
                    <div className="img">
                        <img className='w-75' src={service2} alt="" />
                    </div>
                    <div className="service-description">
                        <h4>A Good Auto Responder</h4>
                        <p>
                            Barton waited tewnty always repair in within we do. An delightes offending curiosity my is dashwoods st . prosperous incresasding surrounded.
                        </p>
                    </div>
                    <div>
                        <span>See more</span>
                    </div>
                </div>
                <div>
                    <div className="img">
                        <img className='w-75' src={service3} alt="" />
                    </div>
                    <div className="service-description">
                        <h4>Home delivery</h4>
                        <p>
                            Barton waited tewnty always repair in within we do. An delightes offending curiosity my is dashwoods st . prosperous incresasding surrounded.
                        </p>
                    </div>
                    <div>
                        <span>See more</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;