// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC70zGZnG76GOBGyfLBqE-ykIyxlAV4jnw",
  authDomain: "red-onion-ee026.firebaseapp.com",
  projectId: "red-onion-ee026",
  storageBucket: "red-onion-ee026.appspot.com",
  messagingSenderId: "214238593316",
  appId: "1:214238593316:web:bfba6731a19d83e4ee73b1"
  // apiKey:process.env.REACT_APP_apikey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;