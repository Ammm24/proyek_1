// src/components/Header.js
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>MUHAMMAD ILHAM</h1>
        <nav>
          <ul>
            <li><a href="#about">Tentang Saya</a></li>
            <li><a href="#portofolio">Portofolio</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;