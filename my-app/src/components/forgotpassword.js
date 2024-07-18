import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase.js"; 
// import "./App.css";
import "./forgotpassword.css"


function ForgotPassword() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal)
      .then(() => {
        alert("Check your email for password reset instructions.");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="App">
      <h1>Forget Password</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your email" required />
        <br />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
}

export default ForgotPassword;


