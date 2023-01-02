import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Authentication with email and password
    const handleSubmit = event => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user.email);
            })
        event.preventDefault();
    }

    // Authentication with google
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                Navigate('/')
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(() =>{
            setUser({});
        })
    }

    return {
        handleSubmit,
        setEmail,
        setPassword,
        handleGoogleSignIn,
        user
    }

}

export default useFirebase;