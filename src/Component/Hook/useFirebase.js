import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const provider = new GoogleAuthProvider();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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
        
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                // setUser(user);
                navigate('/');
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
            .then(() => {
                
            })
    }


    return {
        handleSubmit,
        setEmail,
        setPassword,
        handleGoogleSignIn,
        handleGoogleSignOut,
        user
    }

}

export default useFirebase;