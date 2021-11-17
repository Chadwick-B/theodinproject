import AddToCartForm from '../components/AddToCartForm';
import data from '../assets/data.json';
import '../assets/css/itemDetails.css';

const ItemDetails = ({ match, checker, handler }) => {
  const key = match.params.id;
  const item = data[key];

  return (
    <div className="details-view">
      <img
        src={process.env.PUBLIC_URL + `/assets/${key}.jpg`}
        alt={item.name}
        style={{ float: 'left' }}
      />
      <div className="details-text">
        <div>
          <b>{item.name}</b>
        </div>
        <div>${item.price}</div>
        {checker(key) ? (
          <div>Item added to cart</div>
        ) : (
          <AddToCartForm id={key} handler={handler} />
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
