import React from 'react';
import companyLogo from "/Users/mac/Desktop/Web Programming Project/podcast-now/src/assets/logo.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './login-styles.css';

const Login = () => {
    const navigate = useNavigate();  // Initialize the navigate function

    const handleSignupClick = () => {
        // Navigate to the signup page when the button is clicked
        navigate('/signup');
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
                        <form className="signup--form">
                            <div className="form--group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="" />
                            </div>
                            <button type="submit" className="register--button">Sign In</button>
                        </form>
                        <div className="login--section d-flex justify-content-between">
                            <p>Don't have an account?</p>
                            <button className="login--button" onClick={handleSignupClick}>Signup</button>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default Login;
