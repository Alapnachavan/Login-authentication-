import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, TextField, Button } from "@mui/material";

const Home = () => {
  const [loginSuccess, setLoginSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoginSuccess(true);
    navigate('/mainpage'); 
  };

  return (
    <div style={{ background: "#f0f2f5", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <h3>Enter your password here</h3>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                type="password"
                fullWidth
                label="Password"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: 10 }}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Home;

