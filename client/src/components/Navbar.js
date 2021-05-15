import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary text-white">
      <h4 className="my-auto">
        <i className="bi bi-list-task mr-2" /> Drag Todo
      </h4>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse float-sm-right"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav float-sm-right ml-auto my-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              <i className="bi bi-house-door mr-1"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
              <i className="bi bi-file-person mr-1 ml-md-1 ml-sm-0"></i> About
            </Link>
          </li>

          <li className="nav-item nav-link text-white d-none d-md-block">|</li>
          <li className="nav-item">
            <a
              href="https://github.com/ArijitCodes"
              target="_blank"
              rel="noreferrer"
              className="nav-link text-white"
            >
              <i className="bi bi-github"></i> GitHub{" "}
              <i className="bi bi-link-45deg"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
