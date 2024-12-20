import React from "react";
import "./LoginPage.css"; // Corrected path
import { useNavigate } from "react-router-dom";
import LoginImage from "../src/asstes/LoginImage.png";
import Logo from "../src/asstes/Logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const LoginPage = () => {
   const navigate = useNavigate();
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <img src={LoginImage} alt="Illustration" className="left-image" />
      </div>
      {/* Right Section */}
      <div className="right-section">
        <div className="logo">
          <img src={Logo} alt="Adminify Logo" />
          <h2>Adminify</h2>
        </div>
        <div className="form">
          <h3>Sign in to Adminify</h3>
          <form>
            <input type="email" placeholder="Email address or mobile number" />
            <input type="password" placeholder="Enter your password" />
            <button type="submit" onClick={() => navigate("/HomePage")}>
              Next
            </button>
          </form>
          <p>Sign in using</p>
          <div className="social-icons">
            <GoogleIcon />
            <MicrosoftIcon />
            <LinkedInIcon />
            <FacebookIcon />
          </div>
          <p>
            Doesn’t have Adminify account? <a href="#">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
