import { Link } from 'react-router-dom';
import '../assets/css/nav.css';

const Nav = () => {
  return (
    <>
      <Link to="/" className="logo nav-item">
        #
      </Link>
      <div className="nav-bar">
        <Link to="/products" className="nav-item">
          Products
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Nav;
