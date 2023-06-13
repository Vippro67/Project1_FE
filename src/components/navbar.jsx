import React from 'react';

const Navbar = () => {
  const collapseHandler = () => {
    let nav = document.querySelector('#navbarNav');
    if(nav.classList.contains('collapse'))
      nav.classList.remove('collapse');
    else nav.classList.add('collapse');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={collapseHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Homepage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blogs">Travel Handbook</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/introduction">Introduction</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
