import React from 'react';

const Meal = ({ breakfastMenu }) => {

    const { name, img } = breakfastMenu;
    return (
        <div>
            <div className='g-5 col-12 col-md-6 col-lg-4'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;