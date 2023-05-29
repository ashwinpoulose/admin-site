import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goEmployee = () => {
    navigate("/emp/");
  };
  const goDashboard = () => {
    navigate("/Dashboard/");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };

  if (location.pathname === "/login/" || location.pathname === "/") {
    return null;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">EMPLOYEES</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn btn-primary" onClick={goEmployee}>
                Employee Records
              </button>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goDashboard}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goEmployee}>
                Client
              </a>
            </li>
            s
            <li className="nav-item">
              <a className="nav-link" href="/user">
                User
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/help">
                Help
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={doLogout}>
                Logout
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link btn btn-secondary" onClick={doLogout}>
                Logout
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
