import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../App";


const Profile = () => {
    const { user, logout } = useContext(AuthContext);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState(user?.data.username || '');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleUpload = async () => {}

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }

    return (
        <div class="main-container">
            <h2>My Profile</h2>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                class="input-field"
                readonly="true"
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