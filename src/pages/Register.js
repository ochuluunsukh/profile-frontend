import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpload = async () => {
    if (!file || !username || !password) {
      setMessage('Please select a file, enter your usename and password.');
      return;
    }

    try {
      const filename = encodeURIComponent(file.name);
      const contentType = file.type;

      // Send POST request to API Gateway
      const response = await axios.post(
        'https://my4f80lzn0.execute-api.us-east-1.amazonaws.com/dev/signup',
        { filename, contentType, username, password }
      );

      const { uploadURL } = response.data;
      console.log(uploadURL, response.data);

      // Upload the file to S3 using the pre-signed URL
      await axios.put(uploadURL, file, {
        headers: { 'Content-Type': file.type },
      });

      setMessage('Upload successful!');

      navigate("/profile");

    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Upload failed. Please try again.');
    }
  };

  return (
    <div class="main-container">
      <h2>Register</h2>
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

      <input type="file" onChange={handleFileChange} class="file-input"/>

      {image ? (
        <img class="preview-image" src={image} />
      ) : (
        <div></div>
      )}
      
      <p class="message">{message}</p>

      <button onClick={handleUpload} class="btn-button">Submit</button>

      <p><Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
