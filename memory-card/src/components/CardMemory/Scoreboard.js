import React from 'react';

const Scoreboard = (props) => {
  const { score, highScore } = props;
  return (
    <div className="score-container">
      <div>Score: {score}</div>
      <div>High Score: {highScore}</div>
    </div>
  );
};

export default Scoreboard;
