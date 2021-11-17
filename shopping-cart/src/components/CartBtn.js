import React, { useState } from 'react';
import EditCartForm from './EditCartForm';
import data from '../assets/data.json';
import '../assets/css/cart.css';

const CartBtn = ({ items, handleAdd, handleRemove }) => {
  let total = 0;
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  const cartItemList = items.map((item) => {
    const key = item.id;
    const name = data[key].name;
    const price = parseFloat(data[key].price);
    const imgSrc = process.env.PUBLIC_URL + `/assets/${key}.jpg`;
    const quantity = item.quantity;

    total += price * quantity;
    return (
      <li key={key} className="cart-item">
        <img
          src={imgSrc}
          alt={name}
          width="150"
          style={{ paddingRight: '10px', float: 'left' }}
        />
        <div>
          <b>{name}</b>
        </div>
        <div>${price.toFixed(2)}</div>
        <EditCartForm
          item={item}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => handleRemove(key)}
        >
          Remove
        </span>
      </li>
    );
  });

  const itemList = (
    <div className="cart-overlay">
      <div
        onClickCapture={handleClickClose}
        style={{ position: 'absolute', width: '100vw', height: '100vh' }}
      />
      <div className="cart-display">
        <div className="cart-header">
          <span>Cart</span>
          <button
            type="button"
            onClick={handleClickClose}
            className="cart-btn-close"
          >
            &#10005;
          </button>
        </div>
        {items.length ? (
          <>
            <ul className="cart-items">{cartItemList}</ul>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Total: ${total.toFixed(2)}
              <div>
                <button
                  type="button"
                  className="btn"
                  style={{ justifySelf: 'center' }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div style={{ padding: '10px' }}>Your cart is empty</div>
        )}
      </div>
    </div>
  );

  const cartIcon = (
    <button
      type="button"
      onClick={handleClickOpen}
      className="cart-btn nav-item"
    >
      <span className="cart-count">{items.length}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" />
      </svg>
    </button>
  );

  return <div>{isOpen ? itemList : cartIcon}</div>;
};

export default CartBtn;
