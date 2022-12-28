import React from 'react';
import './Header.css'
import logo from '../../../../images/logo2.png'
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hook/useFirebase';

const Header = () => {
    // const { user } = useFirebase();
    return (
        <div className='container'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='header-login'>
                <Link to="/login"> <button className='m-2' type='login'>login</button></Link>
                <Link to="/signup"><button className='m-2 btn btn-success' type="button">SignUp</button></Link>
            </div>
            {/* <div>
                <p className='text-primary'>{user.email}</p>

            </div> */}
        </div>
    );
};

export default Header;