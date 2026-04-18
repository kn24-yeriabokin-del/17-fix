import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/about">Про нас</Link></li>
        <li><Link to="/contact">Контакти</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;