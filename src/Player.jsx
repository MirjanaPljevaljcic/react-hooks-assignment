import React from "react";
import { useState } from "react";

function Player({ name }) {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  };

  const decrementScore = () => {
    setScore(prevScore => prevScore - 1);
  };

  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        <h2 className="text-center">{name}</h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <button
            className="btn btn-outline-primary w-100"
            onClick={incrementScore}
          >
            Add Point +
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-outline-danger w-100"
            onClick={decrementScore}
          >
            Remove Point -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;

