import React from "react";

const ScoreBoard = (props) => {
  return (
    <div className="score-div">
      <div>Current Score: {props.score}</div>
      <div>Best Score: {props.hiScore}</div>
    </div>
  );
};

export default ScoreBoard;
