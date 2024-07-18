import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword"; 

function PasswordLoginWithFirebase() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reset" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default PasswordLoginWithFirebase;
