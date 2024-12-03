import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import companyLogo from "/Users/mac/Desktop/Web Programming Project/podcast-now/src/assets/logo.png";
import './signup-styles.css';

const Signup = () => {
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname: formData.fullname,
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Registration successful');
                navigate('/login');
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert('An error occurred while registering.');
        }
    };

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-12 col-lg-4 left--section d-flex flex-column justify-content-center align-items-center text-center ">
                        <img src={companyLogo} alt="Company Logo" />
                        <h2>Your Favourite</h2>
                        <h1>Podcasts</h1>
                        <h2>are available here</h2>
                    </div>
                    <div className="col-12 col-lg-4 right--section">
                        <form className="signup--form" onSubmit={handleSubmit}>
                            <div className="form--group">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
                            </div>
                            <div className="form--group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" value={formData.username} onChange={handleChange} required />
                            </div>
                            <div className="form--group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form--group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className="form--group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="register--button">Register</button>
                        </form>
                        <div className="login--section d-flex justify-content-between">
                            <p>Already have an account?</p>
                            <button className="login--button" onClick={handleLoginClick}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
