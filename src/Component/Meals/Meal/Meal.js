import React from 'react';
import './Meal.css';
const Meal = ({ Menu }) => {

    const { name, img } = Menu;

    return (
        <div>
            <div className='mb-5'>
                <div className="card menu-design" style={{ width: "18rem" }}>
                    <img src={img} className="card-img-top w-50" alt="..." />
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