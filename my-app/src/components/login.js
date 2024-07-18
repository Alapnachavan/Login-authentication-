import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Paper, TextField, Button, InputAdornment, IconButton, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "firebase/auth";


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    // showpassword :true
  });
  const [loggedIn, setLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const handlePassVisibility = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Sign-in successful:", result.user.email);
        setLoggedIn(true); 
        navigate("/home"); 
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
        alert("Failed to sign in with Google. Please try again.");
      });
  };

  const handleLogin = async () => {
    try {

    } catch (error) {
      console.error("Error signing in:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  if (loggedIn) {
    return ;
  }

  return (
    <div style={{ background: '#f0f2f5', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
          <Typography variant="h4"  gutterBottom>
            Login
          </Typography>
          <h4>Already have an account?</h4>
          <Button fullWidth variant="contained" color="secondary" onClick={handleSignInWithGoogle}>
          Continue with Google
          </Button>
          <h3>OR</h3>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                type="email"
                fullWidth
                label="Enter your email"
                // placeholder="Email Address"
                variant="outlined"
                value={values.email}
                onChange={handleChange('email')}
                autoComplete="off"
              />
            </Grid>
            <Grid item>
              <TextField
                type={values.showPassword ? 'text' : 'password'}
                fullWidth
                label="Enter your password"
                placeholder="Password"
                variant="outlined"
                value={values.password}
                onChange={handleChange('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handlePassVisibility}
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: 10 }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <p
                style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'left' }}
                onClick={() => navigate("/reset")}
              >
                Forgot password
              </p>
            </Grid>
            <Grid item>

              <Typography>
                For any issues or assistance <a href="mailto:alpanachavan@navgurukul.org" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>alpanachavan@navgurukul.org</a>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;

