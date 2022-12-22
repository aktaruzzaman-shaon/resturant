import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hook/useFirebase';
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-sm p-4'>
                <ul className='navbar-nav m-auto'>
                    <Link to='/breakfast'>breakfast</Link>
                    <Link to='/lunch'>lunch</Link>
                    <Link to='/dinner'>dinner</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;