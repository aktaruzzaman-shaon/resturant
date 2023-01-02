import React from 'react';
import './Header.css'
import logo from '../../../../images/logo/logo2.png'
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';


const Header = () => {
    const user = auth.currentUser;
    return (
        <div className='container'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='header-login'>
                <Link to="/login"> <button className='m-2' type='login'>login</button></Link>
                <Link to="/signup"><button className='m-2 btn btn-success' type="button">SignUp</button></Link>
            </div>
            <div>
                <p className='text-primary'>{user?.displayName}</p>
            </div>
        </div>
    );
};

export default Header;