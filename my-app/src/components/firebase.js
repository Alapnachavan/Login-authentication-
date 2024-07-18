// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
// const firebaseConfig = {
//   apiKey: "AIzaSyDYVSRwUWP3YcRS0V77PJ697rSz7Cb-zxc",
//   authDomain: "login-authentication-d559f.firebaseapp.com",
//   projectId: "login-authentication-d559f",
//   storageBucket: "login-authentication-d559f.appspot.com",
//   messagingSenderId: "893375749962",
//   appId: "1:893375749962:web:254bb98cb400a9b0efebb3",
//   measurementId: "G-PRKYFJCQSC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const GoogleAuthProvider=new GoogleAuthProvider();
// export {auth,provider}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYVSRwUWP3YcRS0V77PJ697rSz7Cb-zxc",
  authDomain: "login-authentication-d559f.firebaseapp.com",
  projectId: "login-authentication-d559f",
  storageBucket: "login-authentication-d559f.appspot.com",
  messagingSenderId: "893375749962",
  appId: "1:893375749962:web:254bb98cb400a9b0efebb3",
  measurementId: "G-PRKYFJCQSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
