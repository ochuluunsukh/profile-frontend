import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

  const handleSubmit = async () => {
    // if (!file || !email) {
    //   setMessage('Please select a file and enter your email.');
    //   return;
    // }

    try {
    //   const filename = encodeURIComponent(file.name);
    //   const contentType = file.type;

      // Send POST request to API Gateway
    //   const response = await axios.post(
    //     '?',
    //     { filename, contentType, email }
    //   );

    //   const { uploadURL } = response.data;
    //   console.log(uploadURL, response.data);
    //   // Upload the file to S3 using the pre-signed URL
    //   await axios.put(uploadURL, file, {
    //     headers: { 'Content-Type': file.type },
    //   });

      setMessage('successful!');


    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Upload failed. Please try again.');
    }
  };

  return (
    <div class="main-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        class="input-field"
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={pass}
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
