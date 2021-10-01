import React from 'react';

const Card = (props) => {
  const { name, path, onClick } = props;

  return (
    <div className="card" onClick={onClick}>
      <img src={path} alt={name} />
      <div className="card-name">{name}</div>
    </div>
  );
};

export default Card;
