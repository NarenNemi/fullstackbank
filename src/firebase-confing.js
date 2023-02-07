import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCEeSIwmudfYv4A0C1MWodVlTkrLEb104o",
    authDomain: "newbank-f180c.firebaseapp.com",
    databaseURL: "https://newbank-f180c-default-rtdb.firebaseio.com",
    projectId: "newbank-f180c",
    storageBucket: "newbank-f180c.appspot.com",
    messagingSenderId: "249985332035",
    appId: "1:249985332035:web:55888778be165883a735f6",
    measurementId: "G-9BSRRMWSQK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

