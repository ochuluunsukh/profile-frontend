import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Profile = () => {
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleUpload = async () => {}

    const handleLogout = (e) => {
        e.preventDefault();
    }

    return (
        <div class="main-container">
            <h2>My Profile</h2>
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

            <input type="file" onChange={handleFileChange} class="file-input"/>

            {image ? (
                <img class="preview-image" src={image} />
            ) : (
                <div></div>
            )}

            <p class="message">{message}</p>
            
            <button onClick={handleUpload} class="btn-button">Update</button>

            <p><Link to="/login" onClick={handleLogout}>Logout</Link></p>
        </div>
    )
}

export default Profile;