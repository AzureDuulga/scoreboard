import React from "react";

const Player = (props) => {
  const { player, incrementHandler, decrementHandler, deleteHandler } = props;
  return (
    <div>
      <h3>{player.name}</h3>
      <button onClick={incrementHandler}>+</button>
      <p>{player.score}</p>
      <button onClick={decrementHandler}>-</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Player;
