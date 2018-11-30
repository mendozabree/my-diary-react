import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-light nav navbar-expand-lg nav-bg">
    <div className="container-fluid">
      <label>MyDiary</label>
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="btn nav-link nav-text" to="login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="btn js-scroll-trigger nav-link nav-text" to="register">Get started</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

NavBar.propTypes = {

};

export default NavBar;
