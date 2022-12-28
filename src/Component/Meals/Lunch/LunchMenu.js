import React from 'react';
import lunch1 from '../../../images/lunch/lunch1.png'
import lunch2 from '../../../images/lunch/lunch2.png'
import lunch3 from '../../../images/lunch/lunch3.png'
import lunch4 from '../../../images/lunch/lunch4.png'
import lunch5 from '../../../images/lunch/lunch5.png'
import lunch6 from '../../../images/lunch/lunch6.png'
import Meal from '../Meal/Meal';

const LunchMenu = () => {

    const LunchMenus = [
        { id: 1, name: "brkf1", img: lunch1 },
        { id: 2, name: "brkf1", img: lunch2 },
        { id: 3, name: "brkf1", img: lunch3 },
        { id: 4, name: "brkf1", img: lunch4 },
        { id: 5, name: "brkf1", img: lunch5 },
        { id: 6, name: "brkf1", img: lunch6 }
    ]

    return (
        <div>
            <h2>This is lunch menu now i edit this</h2>
        </div>
    );
}
export default LunchMenu;