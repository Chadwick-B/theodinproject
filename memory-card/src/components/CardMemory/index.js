import React, { useState, useEffect } from 'react';
import { createID, shuffle } from '../../utils.js';
import Scoreboard from './Scoreboard.js';
import CardNames from './CardNames.js';
import Card from './Card.js';

const CardMemory = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

  const reset = () => {
    setCards(
      shuffle(CardNames).map((name) => {
        return {
          id: createID(),
          name: name,
          checked: false,
        };
      })
    );
  };

  const success = () => {
    setScore(score + 1);
    setCards(shuffle(cards));
  };

  const fail = () => {
    if (score > highScore) setHighScore(score);
    setScore(0);
    reset();
  };

  const handleClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    if (!clickedCard.checked) {
      clickedCard.checked = true;
      success();
    } else {
      fail();
    }
  };

  useEffect(() => {
    reset();
  }, []);

  const items = cards.map((card) => (
    <li key={card.id}>
      <Card
        name={card.name}
        path={process.env.PUBLIC_URL + `/assets/${card.name}.png`}
        onClick={() => handleClick(card.id)}
      />
    </li>
  ));

  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <div className="card-container">
        <ul className="card-inner">{items}</ul>
      </div>
    </>
  );
};

export default CardMemory;
