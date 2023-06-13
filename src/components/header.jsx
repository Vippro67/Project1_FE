import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import logo from '../acssets/logo-tách-nền.png'
import imgprofile from "../acssets/img/profile.png"
import { Container, Form, NavbarBrand } from 'react-bootstrap';
const Header = () => {
      return (<header className="navbar navbar-expand-lg navbar-light bg-light">
        <Container className="container">
          <NavbarBrand href="/">
            <img src={logo} alt="Logo" className="logo img-fluid" style={{ width: '50px' }} />
            <span className="company-name h3">Dream Holiday</span>
          </NavbarBrand>

          <Form className="form-inline my-2 my-lg-0 ml-auto row d-none d-lg-block">
            <input
              className="form-control mr-sm-2 form-control-lg col-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: '300px' }}
            />
          </Form>

          <div className="ml-2">
            <button className="btn btn-primary btn-lg">Login</button>
          </div>
        </Container>
      </header>);
    }
  
export default Header;