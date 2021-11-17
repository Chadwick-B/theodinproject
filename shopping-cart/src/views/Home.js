import { Link } from 'react-router-dom';
import '../assets/css/home.css';

function Home() {
  const clothingSrc = process.env.PUBLIC_URL + '/assets/home-clothing.jpg';
  const accessoriesSrc =
    process.env.PUBLIC_URL + '/assets/home-accessories.jpg';

  return (
    <div>
      <div className="two-panel">
        <div
          style={{ backgroundImage: `url(${clothingSrc})` }}
          className="home-img"
          loading="lazy"
        >
          <Link to="/products">
            <button
              style={{
                position: 'relative',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              className="transparent-btn"
            >
              Clothing
            </button>
          </Link>
        </div>
        <div
          style={{ backgroundImage: `url(${accessoriesSrc})` }}
          className="home-img"
          loading="lazy"
        >
          <Link to="/products">
            <button
              style={{
                position: 'relative',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              className="transparent-btn"
            >
              Accessories
            </button>
          </Link>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2>Fake Example Store</h2>
        <Link to="/products">
          <button className="btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
