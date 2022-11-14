import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";
import spinningGlobe from '../assets/static-spinning-globe.png'

function Landing() {
  const navigate = useNavigate();
  return (
      <div className="mainContainer">
        <div className="secondaryContainer">
          <h1 className="title" >WELCOME TO SITIS!</h1>
          <img src={spinningGlobe} alt="spinning-globe" />
          <button className="enterButton" onClick={() => navigate("/home")}>START BROWSING</button>
        </div>
      </div>
  );
}

export default Landing;
