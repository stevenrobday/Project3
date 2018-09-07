import React from "react";
import { SearchGames, Login } from "../Forms";

export const Navbar = () => (
  <nav className="navbar is-info" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item has-text-white is-size-3">
        <a href="/" className="has-text-white">
        <i className="far fa-newspaper"></i> GameThingy
        </a>
        </div>
    </div>
    <div className="navbar-start">
      <div className="navbar-item">
        <SearchGames />
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="dropdown is-hoverable column">
          <div className="dropdown-trigger">
            <button className="button is-right" aria-haspopup="true" aria-controls="dropdown-menu4">
            <span className="icon is-small">
                <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
                </span>
              <span>Login</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <Login />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-item">or</div>
        <a className="navbar-item has-text-white has-addons" href="/signup">
        {/* <span className="icon is-small">
                <i className="fas fa-user-plus" aria-hidden="true"></i>
              </span> */}
          Sign Up
        </a>
      </div>
    </div>
  </nav>
);