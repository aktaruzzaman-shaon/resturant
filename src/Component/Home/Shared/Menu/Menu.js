import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hook/useFirebase';
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-sm p-4'>
                <ul className='navbar-nav m-auto'>
                    <li className='nav-item'><a className='nav-link text-dark fw-bold' href="#Lunch">Breakfast</a></li>
                    <li className='nav-item'><a className='nav-link text-dark fw-bold' href="#Lunch">Lunch</a></li>
                    <li className='nav-item'><a className='nav-link text-dark fw-bold h' href="#Dinner">Dinner</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;