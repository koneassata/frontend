import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" >
      <h1 className='linkTitle'>🛍️ HOMEMARKET</h1>
      </Link>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/cart">Panier ({cartCount})</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
