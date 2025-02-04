import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="main-container">
      <h2>Welcome to our app</h2>
      <div>
        <Link to="/register">Register</Link>
        <p></p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Home;