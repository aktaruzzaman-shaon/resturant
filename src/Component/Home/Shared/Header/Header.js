import React, { useState } from 'react';
import './Header.css'
import logo from '../../../../images/logo/logo2.png'
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { signOut } from 'firebase/auth';
import useFirebase from '../../../Hook/useFirebase';


const Header = () => {
    const { user, handleGoogleSignOut } = useFirebase();
    return (
        <div className='container'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='header-login'>
                {
                    user ? <button onClick={handleGoogleSignOut} className="btn btn-primary">SignOut</button> :
                        <Link to="/login"> <button className='m-2' type='login'>login</button></Link>
                }
                <Link to="/signup"><button className='m-2 btn btn-success' type="button">SignUp</button></Link>

                <p className='text-primary'>{user?.displayName}</p>

            </div>

        </div >
    );
};

export default Header;