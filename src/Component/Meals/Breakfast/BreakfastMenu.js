import React from 'react';
import breakfasemenu1 from '../../../images/breakfast/breakfast1.png'
import breakfasemenu2 from '../../../images/breakfast/breakfast2.png'
import breakfasemenu3 from '../../../images/breakfast/breakfast3.png'
import breakfasemenu4 from '../../../images/breakfast/breakfast4.png'
import breakfasemenu5 from '../../../images/breakfast/breakfast5.png'
import breakfasemenu6 from '../../../images/breakfast/breakfast6.png'
import Meal from '../Meal/Meal';
import './BreakfastMenu.css'

const BreakfastMenu = () => {
    const breakfastMenus = [
        { id: 1, name: "brkf1", img: breakfasemenu1 },
        { id: 2, name: "brkf1", img: breakfasemenu2 },
        { id: 3, name: "brkf1", img: breakfasemenu3 },
        { id: 4, name: "brkf1", img: breakfasemenu4 },
        { id: 5, name: "brkf1", img: breakfasemenu5 },
        { id: 6, name: "brkf1", img: breakfasemenu6 }
    ]
    return (
       
        <div id='breakfast'>
            <div className="container">
                <div className="row">
                    <div className='breakfastMenuContainer mt-5'>
                        {
                            breakfastMenus.map(breakfastMenu => <Meal
                                key={breakfastMenu.id}
                                Menu={breakfastMenu}
                            ></Meal>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakfastMenu;