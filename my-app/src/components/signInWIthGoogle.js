
import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "firebase/auth";
// import Home from "./Home";

function SignInWithGoogle() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setValue(email);
    }
  }, []);

  return (
    <div>
      {/* {value ? (
        <Home />
      ) : (
        <button onClick={handleClick}>Sign in with Google</button>
      )} */}
    </div>
  );
}

export default SignInWithGoogle;
