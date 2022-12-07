import React from 'react';
import './Header.css'
import logo from '../../../../images/logo2.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='header-login'>
                <Link to="/login"> <button className='m-2' type='login'>login</button></Link>

                <Link to="/signup"><button className='m-2' type="button" class="btn btn-success">SignUp</button></Link>

            </div>
        </div>
    );
};

export default Header;