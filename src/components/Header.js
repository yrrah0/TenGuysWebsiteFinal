import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src="/images/logo.jpg" alt="Logo" />
        </div>
        <div className="title">
          <h1>Ten Guys</h1>
        </div>
      </div>
      <div className="header-bottom">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/customer-support">Customer Support</Link>
          <Link to="/interact">Interact With Us</Link> {/* Add link to Interact With Us page */}
          <Link to="/cart">
            <i className="fas fa-shopping-cart" style={{ color: '#fff' }}></i> Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
