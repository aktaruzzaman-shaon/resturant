import React from 'react';
import dinner1 from '../../../images/dinner/dinner1.png'
import dinner2 from '../../../images/dinner/dinner2.png'
import dinner3 from '../../../images/dinner/dinner3.png'
import dinner4 from '../../../images/dinner/dinner4.png'
import dinner5 from '../../../images/dinner/dinner5.png'
import dinner6 from '../../../images/dinner/dinner6.png'
import Meal from '../Meal/Meal';
import './DinnerMeal.css';

const DinnerMeal = () => {

    const DinnerMenus = [
        { id: 1, name: "dinner1", img: dinner1 },
        { id: 2, name: "dinner2", img: dinner2 },
        { id: 3, name: "dinner3", img: dinner3 },
        { id: 4, name: "dinner4", img: dinner4 },
        { id: 5, name: "dinner5", img: dinner5 },
        { id: 6, name: "dinner6", img: dinner6 }
    ]


    return (
        <div className="container">
            <div className="row">
                <div className="dinnerMenu mt-5">
                        {
                            DinnerMenus.map(dinnerMenu =>
                                <Meal
                                    key={dinnerMenu.id}
                                    Menu={dinnerMenu}
                                ></Meal>
                            )
                        }
                </div>
            </div>
        </div>

    );
};

export default DinnerMeal;