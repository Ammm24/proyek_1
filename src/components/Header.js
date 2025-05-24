// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>MUHAMMAD ILHAM</h1>
        <button className="hamburger-button" onClick={toggleMobileMenu}>
          ☰
        </button>
        <nav className={isMobileMenuOpen ? 'mobile-open' : ''}>
          <ul>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Tentang Saya</a></li>
            <li><a href="#portofolio" onClick={() => setIsMobileMenuOpen(false)}>Portofolio</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;