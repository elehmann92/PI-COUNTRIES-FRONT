import React from "react";
import { Link } from "react-router-dom";
import '../styles/navBar.css'
import spinningGlobe from '../assets/static-spinning-globe.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

function NavBar() {
  return (
    <div className="nav">
      <div className="iso">
        <img src={spinningGlobe} alt="spinningGlobe" />
        <a href="/">
          <p>SITIS</p>
        </a>
      </div>
      <div className="links">
        <Link className="navLink" to="/home">HOME</Link>
        <Link className="navLink" to="/activity_creation">CREATE ACTIVITY</Link>
        <a href="https://github.com/elehmann92" target="_blank" rel="noreferrer"><img className="linkImg" src={github} alt="GITHUB" /></a>
        <a href="https://www.linkedin.com/in/eric-lehmann-56327a83/" target="_blank" rel="noreferrer"><img className="linkImg" src={linkedin} alt="LINKEDIN" /></a>
        
      </div>
    </div>
  );
}

export default NavBar;
