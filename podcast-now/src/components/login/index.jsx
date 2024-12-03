import React, { useState } from 'react';
import companyLogo from "/Users/mac/Desktop/Web Programming Project/podcast-now/src/assets/logo.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './login-styles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Initialize the navigate function

    const handleSignupClick = () => {
        // Navigate to the signup page when the button is clicked
        navigate('/signup');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear any previous errors
        setError('');

        try {
            // Send the login request to the backend API
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            // Check if the login was successful
            if (response.ok) {
                const data = await response.json();
                // Store the token in localStorage (or sessionStorage)
                localStorage.setItem('token', data.token);
                // Redirect the user to the homepage or dashboard
                navigate('/');
            } else {
                const data = await response.json();
                setError(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setError('Network error. Please try again later.');
        }
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-evenly">
                <div className="col-12 col-lg-4 left--section d-flex flex-column justify-content-center align-items-center text-center">
                    <img src={companyLogo} alt="Company Logo" />
                    <h2>Your Favourite</h2>
                    <h1>Podcasts</h1>
                    <h2>are available here</h2>
                </div>
                <div className="col-12 col-lg-4 right--section">
                    <form className="signup--form" onSubmit={handleSubmit}>
                        <div className="form--group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="form--group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder=""
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="register--button">Sign In</button>
                    </form>
                    <div className="login--section d-flex justify-content-between">
                        <p>Don't have an account?</p>
                        <button className="login--button" onClick={handleSignupClick}>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
