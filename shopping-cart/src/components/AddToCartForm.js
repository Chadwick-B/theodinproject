import React, { useState } from 'react';

const AddToCartForm = ({ id, handler }) => {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handler(id, quantity);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };

  const fieldContainerStyle = {
    fontSize: '18px',
    display: 'grid',
    gridTemplateColumns: '0.3fr 0.4fr 0.3fr',
    textAlign: 'center',
    width: '120px',
    border: '1px solid #111',
  };

  const btnStyle = {
    fontSize: '24px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={fieldContainerStyle}>
        <button type="button" onClick={handleMinus} style={btnStyle}>
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={handlePlus} style={btnStyle}>
          +
        </button>
      </div>
      <button type="submit" className="btn">
        Add to Cart
      </button>
    </form>
  );
};

export default AddToCartForm;
