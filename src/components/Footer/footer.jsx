import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-3">
          <h4>About us</h4>
          <ul>
            <li>
              <a href="#">Introduce</a>
            </li>
            <li>
              <a href="#">Tours</a>
            </li>
            <li>
              <a href="#">Policy and terms</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Tour booking status</a>
            </li>
            <li>
              <a href="#">Payment methods</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Contact</h4>
          <ul>
            <li>Email: dreamholiday@gmail.com</li>
            <li>HOT Line: XX-XX-XX-XX</li>
            <li>Phone number: 0393xxx9xx</li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Follow us</h4>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
  </footer>
  
  );
};

export default Footer;