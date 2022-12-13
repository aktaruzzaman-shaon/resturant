import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import './SignUp.css'

const SignUp = () => {

    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleMailBlur = (event) => {
        setMail(event.target.value);

    }
    const handlePassBlur = (event) => {
        setPassword(event.target.value);
    }

    const navigateLogin = () => {
        Navigate('/login');
    }

    const handleSubmit = (event) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
        event.preventDefault();

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container w-25'>
                    <div className="mb-3 mt-5">
                        <input type="email" className="form-control" onBlur={handleMailBlur} placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" onBlur={handlePassBlur} placeholder='Password' />
                    </div>
                    <p className='text-danger'> {error} </p>
                    <p>Already have an account? <Link className='text-primary' to={'/login'} onclick={navigateLogin}>login</Link></p>
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;