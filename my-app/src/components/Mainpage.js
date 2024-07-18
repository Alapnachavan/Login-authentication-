// import React from "react";
// function Mainpage(){
//     return(
//         <div>
//             <h1>login successfully!!!!! </h1>
//         </div>
//     )
// }
// export default Mainpage

import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Navigate back to the Home component
  };

  return (
    <div style={{ background: "#f0f2f5", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <Container maxWidth="sm" style={{ textAlign: "center", background: "#fff", padding: "2em", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Typography variant="h3" component="h1" gutterBottom style={{ color: "#3f51b5" }}>
          Login Successful!
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Welcome to the main page. You have successfully logged in.
        </Typography>
        <img src="https://via.placeholder.com/150" alt="Welcome" style={{ margin: "20px 0" }} />
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </div>
  );
};

export default Mainpage;
