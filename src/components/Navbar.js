// src/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: '15px', background: '#282c34', color: 'white' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0 }}>
        <li><Link to="/" style={{ color: 'cyan', textDecoration: 'none' }}>Головна</Link></li>
        <li><Link to="/about" style={{ color: 'cyan', textDecoration: 'none' }}>Про нас</Link></li>
        <li><Link to="/contact" style={{ color: 'cyan', textDecoration: 'none' }}>Контакти</Link></li>
        <li><Link to="/gallery" style={{ color: 'yellow', textDecoration: 'none' }}>Галерея</Link></li> {/* 👈 ДОДАЙ ЦЕ */}
      </ul>
    </nav>
  );
};

export default Navbar;