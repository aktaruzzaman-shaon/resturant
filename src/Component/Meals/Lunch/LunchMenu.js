import React from 'react';
import lunch1 from '../../../images/lunch/lunch1.png'
import lunch2 from '../../../images/lunch/lunch2.png'
import lunch3 from '../../../images/lunch/lunch3.png'
import lunch4 from '../../../images/lunch/lunch4.png'
import lunch5 from '../../../images/lunch/lunch5.png'
import lunch6 from '../../../images/lunch/lunch6.png'
import Meal from '../Meal/Meal';
import './LunchMenu.css'

const LunchMenu = () => {

    const LunchMenus = [
        { id: 1, name: "lunch1", img: lunch1 },
        { id: 2, name: "lunch2", img: lunch2 },
        { id: 3, name: "lunch3", img: lunch3 },
        { id: 4, name: "lunch4", img: lunch4 },
        { id: 5, name: "lunch5", img: lunch5 },
        { id: 6, name: "lunch6", img: lunch6 }
    ]

    return (
        <div className="container">
            <div className='row'>
                <div className="lunchMenu">
                    {
                        LunchMenus.map(lunchMenu =>
                            <Meal
                                key={lunchMenu.id}
                                Menu={lunchMenu}
                            ></Meal>
                        )
                    }
                </div>

            </div>
        </div>

    );
}
export default LunchMenu;