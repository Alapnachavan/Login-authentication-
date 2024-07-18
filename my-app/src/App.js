import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/Home";
import ForgotPassword from "./components/forgotpassword";
import "./App.css"
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reset" element={<ForgotPassword />} />
          <Route path="/" element={<Login />} />
          <Route path="/mainpage" element={<Mainpage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
