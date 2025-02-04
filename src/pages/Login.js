import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to API Gateway
      const response = await axios.post(
        'https://e7tpo9rpo8.execute-api.us-east-1.amazonaws.com/api/login',
        { username, password }
      );

      login(response);
      navigate("/profile");

    } catch (error) {
      console.error('Error:', error);
      setMessage('Wrong username and password.');
    }
  };

  return (
    <div class="main-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        class="input-field"
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
        class="input-field"
      />

      <p class="message">{message}</p>

      <button onClick={handleSubmit} class="btn-button">Login</button>
      
      <p><Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
