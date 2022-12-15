import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
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

    useEffect( () => {
        onAuthStateChanged(auth,user =>{
            setUser(user);
        })
    }, [])

    return {
        handleSubmit,
        setEmail,
        setPassword,
        user
    }

}

export default useFirebase;