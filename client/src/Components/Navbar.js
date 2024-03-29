import "../Styles/navbar.css";
import React from "react";
import { Link } from "react-router-dom"
import Auth from "../util/auth";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

export const Navbar = function () {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">
          {/* <img src="" alt="" /> */}
          Music Playlist
        </span>
        <div className="dropdown">
          {Auth.loggedIn() ? (
          <button
            className="btn btn-gold dropdown"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              alt=""
              src="https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.webp"
            />
            <Link to="/user"></Link>
          </button>
          ) : (
          <button>
            <Link to="/login" className="navbar-link">Log in</Link>
          </button>
          )}
        </div>
      </div>
    </nav>
  );
};
