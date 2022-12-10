// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKJLkv85iljnu_sqLz-M_iOGQWZeZJ37I",
    authDomain: "resturant-3e2ef.firebaseapp.com",
    projectId: "resturant-3e2ef",
    storageBucket: "resturant-3e2ef.appspot.com",
    messagingSenderId: "538401354088",
    appId: "1:538401354088:web:7872204f17b1a81cb8e6dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
