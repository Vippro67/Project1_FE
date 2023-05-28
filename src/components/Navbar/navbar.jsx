
import React from 'react';
const HeaderNavbar = () => {
  return (
    <div className="row">
    <a href="/" className="col-3">Homepage</a>
    <a href="/blog" className="col-3">Travel Handbook</a>
    <a href="/introduction" className="col-3">Introduction</a>
    <a href="/support" className="col-3">Support</a>
    </div>
  );
};

export default HeaderNavbar;