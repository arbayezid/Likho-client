// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2DCsCZ0eBCKPKs_Q5Cd18JoSIJexQnLQ",
    authDomain: "example-build.firebaseapp.com",
    projectId: "example-build",
    storageBucket: "example-build.appspot.com",
    messagingSenderId: "397986997252",
    appId: "1:397986997252:web:82f10f21e29525bd284151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;