import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

function Header() {
  return (
    <header className="nav-header">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fuggles" />
      <nav className="navbar">
        <div className="logo">
        {/* styling first letters */}
          <h1 className="word"><span className="big-letter">c</span>incinnati <span className="big-letter">T</span>ravels</h1>
        </div>
        {/* Move to bottom for some screen sizes */}
        <div className="Move-To-Footer-Container">
          <a id="Move-To-Footer" href="#footer"><button className="nav-btn">Go To Bottom</button></a>
        </div>
        {/* Nav links linked to each of the pages */}
        <ul className="nav-links">
          <li>
            <Link to="/"><button className="nav-btn">Home</button></Link>
          </li>
          <li>
            <Link to="/AboutUs"><button className="nav-btn">About Us</button></Link>
          </li>
          <li>
            <Link to="/attractions"><button className="nav-btn">Attractions</button></Link>
          </li>
          <li>
            <Link to="/Map"><button className="nav-btn">Map</button></Link>
          </li>
          <li>
            <Link to="/contact"><button className="nav-btn">Contact</button></Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
