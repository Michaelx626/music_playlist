import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Styles/navbar.css'



export const Navbar = function() {


return (
<nav className="navbar navbar-light bg-light">
      <div className="container">
          <span className="navbar-brand mb-0 h1">
            {/* <img src="" alt="" /> */}
            Music Playlist
          </span>
        <div className="dropdown">
            <button
              className="btn btn-gold dropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                alt=""
                src="https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.webp"
              />
            </button>

                  <button>Log In</button>

        </div>
      </div>
    </nav>



)
}