import io from "socket.io-client";
import React, { useEffect, useState, useRef } from "react";
import { Route, useHistory } from "react-router-dom";
import Game from "./components/game/Game";
import Loser from "./components/game/Loser";
import Winner from "./components/game/Winner";
import Main from "./components/game/Main";
import "./App.css";

const socket = io.connect("http://localhost:5000");

function App() {
  const history = useHistory();
  const [user, setUser] = useState();
  const [isSingleUser, setIsSingleUser] = useState();

  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      const userInfo = {
        id: Math.floor(Math.random() * (100 - 1) + 1),
        username: "player",
      };
      setUser(userInfo);
      socket.emit("newgame", { user: userInfo, isSingleUser: isSingleUser });
    }
  }, [isSingleUser]);

  const clickedNewGame = () => {
    history.push("/");
    window.location.reload(true);
  };

  const clickedPlayerOption = (playerOption) => {
    if (playerOption === "One Player") {
      setIsSingleUser(true);
      history.push("/game");
    } else if (playerOption === "Two Player") {
      setIsSingleUser(false);
      history.push("/game");
    } else {
      alert("There is no such an option to play!");
    }
  };

  return (
    <div className="App">
      <Route exact path="/lose">
        <Loser cliked={clickedNewGame} />
      </Route>
      <Route exact path="/win">
        <Winner cliked={clickedNewGame} />
      </Route>
      <Route exact path="/game">
        <Game socket={socket} user={user} />
      </Route>
      <Route exact path="/">
        <Main clicked={clickedPlayerOption} />
      </Route>
    </div>
  );
}

export default App;
