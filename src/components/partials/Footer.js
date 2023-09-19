import React from "react";

// using arrow function
const Footer = () => {
  return (
    <footer id="footer">
      {" "}
      <br /> <hr /> <br />
      {/* some of anchors(links from bottom) */}
      <div className="anchors">
        <a className="anchors-footer" href="/">
          Home
        </a>
        <a className="anchors-footer" href="/aboutus">
          About us
        </a>

        <a className="anchors-footer" href="/map">
          Map
        </a>
        <a className="anchors-footer" href="/contact">
          contact us
        </a>
        <a className="anchors-footer" href="/attractions">
          Attractions
        </a>
      </div>
      {/* copyright */}
      <div className="copyright">
        <div className="footer-container">
          <ul className="footer-ul">
            <li className="footer-li">
              <a href="home">site map</a>{" "}
            </li>
            <li className="footer-li">
              <a href="home">Terms of Use</a>
            </li>
            <li className="footer-li">
              <a href="home">Privacy Statements</a>{" "}
            </li>
          </ul>
          {/* copyrighted to us */}
          <ul>
            <li className="footer-li">
              &copy; 2023 Aaditya Acharya/Benjamin McQueen. <br />
              All rights reserved.
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
