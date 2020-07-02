import React from 'react';
// import logo from './logo.svg';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Nikola Lazovic</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> */}
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="portfolio.html">Portfolio</a> */}
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="contact.html">Contact</a> */}
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Header;
