import React from 'react';
import auth from '../../../firebase.init';
import useFirebase from '../../Hook/useFirebase';
import './Login.css'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    // const [user, setUser] = useState({});
    const navigate = useNavigate();
    const { handleGoogleSignIn, user } = useFirebase();

    const { handleSubmit, setEmail, setPassword } = useFirebase();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    // Google authentication
    // const handleGoogleSignIn = () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             const user = result.user;
    //             navigate('/')
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }


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
                    {
                        user.email ? <button type="submit" className="btn btn-primary">SignOut</button> :
                            <button type="submit" className="btn btn-primary">Login</button>

                    }

                    <div className='or'></div>

                    <div className='fb-loginButton'>
                        <button>Facebook</button>
                    </div>
                    <div className="google-loginButton">
                        <button
                            onClick={handleGoogleSignIn}
                        >Google</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;


