import React from 'react';
import logo from '../../../../images/logo/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="row">
                <div className="col footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="col footer-about">
                    <a href="#">About online food</a>
                    <a href="">Read our blog</a>
                    <a href="">Sign up to deliver</a>
                    <a href="">Add your resturant</a>
                </div>
                <div className="col footer-help">
                    <p>Get help</p>
                    <p>Read all cities</p>
                    <p>View all cities</p>
                    <p>Resturant near me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;