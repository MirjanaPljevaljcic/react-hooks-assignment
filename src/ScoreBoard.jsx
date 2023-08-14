import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";

function ScoreBoard() {
  const [players, setPlayers] = useState([]);
  const playerInputRef = useRef(null);

  const addPlayer = () => {
    const playerName = playerInputRef.current.value;
    if (playerName) {
      setPlayers(prevPlayers => [
        ...prevPlayers,
        { id: Date.now(), name: playerName }
      ]);
      playerInputRef.current.value = '';
    }
  };

  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              ref={playerInputRef}
              required
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="addPlayer"
              onClick={addPlayer}
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div className="col-md-4" key={player.id}>
              <Player name={player.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;
