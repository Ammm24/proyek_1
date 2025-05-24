import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Let's Start Contact ME !!!</p>
      </div>
    </footer>
  );
}

export default Footer;