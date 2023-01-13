import { useState } from "react";
import Player from "./component/player";
import { players as data } from "./data.js";
import style from "./App.css";
import Button from "./component/button";

function App() {
  const [players, setPlayers] = useState(data);
  const increment = (name) => {
    const index = players.findIndex((p) => p.name == name);
    console.log(name, index);
    players[index].score += 1;
    players.sort((players1, players2) => players2.score - players1.score);
    setPlayers([...players]);
  };
  const decrement = (name) => {
    const index = players.findIndex((p) => p.name == name);
    console.log(name, index);
    players[index].score -= 1;
    players.sort((players1, players2) => players2.score - players1.score);
    setPlayers([...players]);
  };
  const addPlayer = () => {
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      alert("Utga oruulna uu");
    } else {
      players.push({ name: person, score: 0 });
    }
    console.log(players);
    setPlayers([...players]);
  };
  const deleteItem = (name) => {
    const index = players.findIndex((p) => p.name == name);
    players.splice(index, 1);
    setPlayers([...players]);
  };
  return (
    <div className="flex">
      <Button addPerson={addPlayer} />
      {players.map((i) => {
        return (
          <div className="singleItem" key={i.name}>
            <Player
              player={i}
              incrementHandler={() => {
                increment(i.name);
              }}
              decrementHandler={() => {
                decrement(i.name);
              }}
              deleteHandler={() => {
                deleteItem(i.name);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
