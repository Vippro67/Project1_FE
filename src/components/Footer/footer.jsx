import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at est
              commodo, ultrices tortor at, fringilla nunc. Integer gravida ex sed
              ligula tincidunt, vitae cursus odio cursus.
            </p>
          </Col>
          <Col md={4}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Homepage</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              123 Travel Street<br />
              City, Country<br />
              +1 123-456-7890<br />
              info@example.com
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} Travel Website. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
