import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Login = () => {

  const { push } = useHistory();
  
  const [bubble, setBubble] = useState({
    credentials: {
      username:"Lambda",
      password:"School"
    }

  });
  const [errors, setErrors] = useState({
    error:"",
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = (e) =>{
    e.preventDefault();
    if(bubble.credentials.username !== "Lambda" || bubble.credentials.password !== "School")
    {
      setErrors ({error:"Username or Password not valid"});
    }
    axios
    .post('http://localhost:5000/api/login',bubble.credentials)
    .then(res=>{
      //console.log(res.data.payload);
      localStorage.setItem("token", res.data.payload);
      push("/bubblepage");
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const error = errors.error;
  //replace with error state

  const handleChange = (e) => {
    console.log("e:", e.target.value);
    setBubble({
      credentials: {
        ...bubble.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <div>
        <form onSubmit={login}>
          {/* <form onSubmit> */}
          <input
            type="text"
            data-testid="username"
            name="username"
            value={bubble.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            data-testid="password"
            name="password"
            value={bubble.credentials.password}
            onChange={handleChange}
          />
          <p data-testid="errorMessage" className="error">
            {error}
          </p>
          <button>Log in</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.