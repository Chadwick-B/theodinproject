import { Link } from 'react-router-dom';
import data from '../assets/data.json';
import '../assets/css/products.css';

const Products = () => {
  const keys = Object.keys(data);
  return (
    <div className="product-view">
      <ul className="product-list">
        {keys.map((key) => (
          <li key={key}>
            <Link to={`/item/${key}`} className="item">
              <img
                src={process.env.PUBLIC_URL + `/assets/${key}.jpg`}
                alt={data[key].name}
                loading="lazy"
              />
              <div>
                <b>{data[key].name}</b>
              </div>
              <div>${data[key].price}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
