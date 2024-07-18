// import React from "react";
// import { BrowserRouter,Route ,Router} from "react-router-dom";
// import Home from "./Home";
// import Forgotpassword from "./forgotpassword"
// function passwordloginwithfirebase(){
//     return(
//         <BrowserRouter>
//         <div>
//             <Router path="/home" element={<Home/>}/>
//             <Route path ="/reset" element={<Forgotpassword/>}/>

//         </div>
//         </BrowserRouter>
//     )
// }
// export default passwordloginwithfirebase;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword"; // Make sure the file name matches the import

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
