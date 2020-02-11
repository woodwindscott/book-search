import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import './style.css'

function NavBar(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#"><h2>Google Books Search</h2></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <button type="button" className="btn btn-danger" id="scrape">Search for a book</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/saved">
                <button type="button" className="btn btn-danger" id="clear">Saved Books</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default NavBar;
