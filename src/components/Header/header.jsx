import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMoon } from '@fortawesome/free-solid-svg-icons'
  import logo from '../../acssets/logo-tách-nền.png'
  import imgprofile from "../../acssets/img/profile.png"
const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="logo img-fluid" style={{ width: '50px' }} />
          <span className="company-name h3">Dream Holiday</span>
        </a>

        <form className="form-inline my-2 my-lg-0 ml-auto row">
          <input
            className="form-control mr-sm-2 form-control-lg col-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: '300px' }}
          />
          <button className="btn btn-outline-primary my-2 my-sm-0 btn-lg boder col-2" type="submit">
            🔍
          </button>
        </form>

        <div className="ml-2">
          <button className="btn btn-primary btn-lg">Login</button>
          {/* Replace the following line with logic to show either login or logout button based on user login status */}
          {/* <button className="btn btn-primary btn-lg">Logout</button> */}
          <img src={imgprofile} alt="User" className="user-icon img-fluid" style={{ width: '50px' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;