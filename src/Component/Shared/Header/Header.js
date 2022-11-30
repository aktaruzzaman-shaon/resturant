import React from 'react';
import './Header.css'
import logo from '../../../images/logo2.png'

const Header = () => {
    return (
        <div className='container'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='header-login'>
                <button className='m-2' type='login'>login</button>
                <button className='m-2' type="button" class="btn btn-success">SignUp</button>
            </div>
        </div>
    );
};

export default Header;