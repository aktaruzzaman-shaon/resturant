import React from 'react';
import auth from '../../../firebase.init';
import useFirebase from '../../Hook/useFirebase';
import './Login.css'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const { handleSubmit, setEmail, setPassword } = useFirebase();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    // Google authentication
    // signInWithPopup(auth, GoogleAuthProvider)
    //     .then((result) => {
    //         const user = result.user;
    //         console.log(user);
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //     })



    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
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

                    <div className='or'></div>

                    <div className='fb-loginButton'>
                        <button>Facebook</button>
                    </div>
                    <div className="google-loginButton">
                        <button

                            onClick={() => handleGoogleSignIn()}
                        >Google</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;