import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import companyLogo from "/Users/mac/Desktop/Web Programming Project/podcast-now/src/assets/logo.png";
import './signup-styles.css';

const Signup = () => {


    const navigate = useNavigate();  

    const handleLoginClick = () => {
       
        navigate('/login');
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
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" id="fullname" placeholder="" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" placeholder="" />
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
