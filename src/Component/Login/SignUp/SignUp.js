import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import auth from '../../../firebase.init';

import './SignUp.css'

const SignUp = () => {


    const [name, setName] = useState(" ");
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }

    const handleMailBlur = (event) => {
        setMail(event.target.value);

    }
    const handlePassBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })

        event.preventDefault();

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' onBlur={handleNameBlur} />
                <input type="email" name="email" placeholder='email' onBlur={handleMailBlur} />
                <input type="password" name="password" placeholder='password' onBlur={handlePassBlur} />
                <input type="submit" name='submit' value="submit" />
            </form>
        </div>
    );
};

export default SignUp;