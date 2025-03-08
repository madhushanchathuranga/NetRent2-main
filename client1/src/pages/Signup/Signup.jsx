import React from "react";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import "./Signup.scss";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign up</h2>
        <p>Join some details to get you in!</p>

        <input type="text" placeholder="Email/Phone" className="input-field" />

        <input type="password" placeholder="Password" className="input-field" />

        <button className="signup-btn">Sign up</button>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-buttons">
          <button className="google-btn">
            <FaGoogle className="google-icon" /> Continue with Gmail
          </button>
          <button className="email-btn">
            <FaRegEnvelope className="email-icon" /> Continue with
            Email/Username
          </button>
        </div>

        <div className="terms-container">
          <span>Terms & Conditions</span>
          <span>Support</span>
          <span>Customer Care</span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
