import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import auth from '../../../firebase.init';
import useFirebase from '../../Hook/useFirebase';

const Login = () => {

    const { handleSubmit, setEmail, setPassword } = useFirebase();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container w-25'>
                    <div className="mb-3 mt-5">
                        <input type="email" className="form-control" onBlur={handleEmailBlur} placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" onBlur={handlePasswordBlur} placeholder='Password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;