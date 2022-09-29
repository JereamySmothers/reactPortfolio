import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from './utils/helpers';
// import '../assets/styles/style';

function Nav( currentPage, handlePageChange) {

  return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">Jereamy Smothers</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => handlePageChange("Home")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange("Portfolio")}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange("Resume")}>Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange("Contact")}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  );
}

export default Nav;