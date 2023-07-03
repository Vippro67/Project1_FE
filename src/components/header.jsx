import React from 'react';
import logo from '../acssets/logo-tách-nền.png'
import { Container, Dropdown, Form, NavbarBrand } from 'react-bootstrap';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const Header = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };
  function getCurrentUser() {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  };
  const user = getCurrentUser();
  const handleRegisterPopup = () => {
    if (showLoginPopup) setShowLoginPopup(!showLoginPopup);
    setShowRegisterPopup(!showRegisterPopup);
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    axios
      .get('http://localhost:8080/api/v1/auth/signin', {
        authRequest: {
          username: username,
          password: password,
        }
      })
      .then((response) => {
        alert('Login successful:', response.data);
      })
      .catch((error) => {
        alert('Error during login:', error);
      });
  };
  const handleRegisterClick = () => {
    axios.post('http://localhost:8080/api/v1/auth/createUser', { username: username, password: password, userRole: 'ROLE_USER' })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
      })
      .catch(error => {
        alert('Error obtaining access token:', error);
      });
    setShowRegisterPopup(!showRegisterPopup);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("user");
  };
  return (<header className="navbar navbar-expand-lg navbar-light bg-light">
    <Container className="container">
      <NavbarBrand href="/">
        <img src={logo} alt="Logo" className="logo img-fluid" style={{ width: '50px' }} />
        <span className="company-name h3">Dream Holiday</span>
      </NavbarBrand>

      {/* <div className="ml-2">
        {user ? ( // If the user exists, display the username instead of the login button
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {user.username}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={handleLogoutClick()}>Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <button className="btn btn-primary btn-lg" onClick={handleLoginPopup}>
            Login
          </button>
        )}      
        </div> */}

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {user}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item href="/search" >Tra cứu đơn hàng</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleLogoutClick()}>Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
    <Modal show={showLoginPopup} onHide={handleLoginPopup}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='login-form'>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username / Email address</label>
            <input required={true} type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input required={true} type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </div>
        </form>
        <p>Nếu bạn chưa có tài khoản hãy <button style={{
          border: 'none',
          background: 'none',
          padding: '0',
          font: 'inherit',
          color: 'blue',
          textDecoration: 'underline',
          cursor: 'pointer',
        }} onClick={handleRegisterPopup} >đăng kí </button> tại đây.  </p>
      </Modal.Body>
      <Modal.Footer>

        <Button variant="secondary" onClick={handleLoginPopup}>Close</Button>
        <Button variant="primary" onClick={handleLoginClick}>Login</Button>
      </Modal.Footer>
    </Modal>
    <Modal show={showRegisterPopup} onHide={handleRegisterPopup}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='register-form'>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputUsername1">Username</label>
            <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" aria-describedby="emailHelp" placeholder="Enter username" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
          </div>

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleRegisterPopup}>Close</Button>
        <Button variant="primary" onClick={handleRegisterClick}>Register</Button>
      </Modal.Footer>
    </Modal>
  </header>);
}

export default Header;