import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function HeaderFR() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src="/images/logo.jpg" alt="Logo" />
        </div>
        <div className="title">
          <h1>Dix Hommes</h1>
        </div>
      </div>
      <div className="header-bottom">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/shop">Boutique</Link>
          <Link to="/about-fr">À Propos de Nous</Link>
          <Link to="/customer-support">Support Client</Link>
          <Link to="/interact">Interagir Avec Nous</Link>
          <Link to="/cart">
            <i className="fas fa-shopping-cart" style={{ color: '#fff' }}></i> Panier
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderFR;
