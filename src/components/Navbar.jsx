import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>🛍️ HOMEMARKET</h1>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/cart">Panier ({cartCount})</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
