import React from "react";
import { useEffect, useState, useRef } from "react";
import Card from "../card/Card";
import Button from "../button/Button";
import { useHistory } from "react-router-dom";
import "./Game.css";

function Game({ socket, user }) {
	const history = useHistory();

	const [winner, setWinner] = useState();
	const [game, setGameData] = useState([]);
	const [attemps, setAttemps] = useState([]);

	useEffect(() => {
		socket.on("game", (game) => {
			setGameData(game);
			setAttemps(game.attemps);
			if (game.winner !== null) {
				setWinner(game.winner);
			}
		});
	}, [game]);

	const refWinner = useRef();
	useEffect(() => {
		if (!refWinner.current) {
			refWinner.current = true;
		} else {
			if (user.id === winner) {
				history.push("/win");
			} else {
				history.push("/lose");
			}
		}
	}, [winner]);

	const clickedHandler = (operator) => {
		if ((game.playerTwo.id !== "000" && game.turn === user.id)) {
			alert("You can not make a move ! Please wait other player.");
		} else {
			const updatedAttemp = {
				gameId: "",
				newValue: 0,
				oldValue: 0,
				text: "",
				number: 0,
				user: null,
			};
			if (operator === "-1") {
				updatedAttemp.number = -1;
			} else if (operator === "+1") {
				updatedAttemp.number = +1;
			} else if (operator === "0") {
				updatedAttemp.number = 0;
			}
			updatedAttemp.user = game.turn === game.playerOne.id ? game.playerOne : game.playerTwo;
			updatedAttemp.gameId = game.id;
			updatedAttemp.newValue = game.attemps.newValue;
			updatedAttemp.oldValue = game.attemps.oldValue;
			updatedAttemp.text = game.attemps.text;
			socket.emit("turn", updatedAttemp);
		}
	};

	return (
		<div className="game">
			<div className="header">
				<h1>Lets Play !</h1>
				<p className="header-text">
					<b>First Value : {game.startingNumber}</b>
				</p>
			</div>
			<div className="game-card">
				{attemps.map((attempt, index) => {
					return (
						<div className={index % 2 === 0 ? "game-card-left" : "game-card-right"}>
							<Card
								key={index}
								result={attempt.newValue}
								statement={attempt.text}
								number={attempt.number}
							/>
						</div>
					);
				})}
			</div>

			<div className="game-button">
				<Button clicked={clickedHandler} buttonValue="-1" class={"button-col"} />
				<Button clicked={clickedHandler} buttonValue="0" class={"button-col"} />
				<Button clicked={clickedHandler} buttonValue="+1" class={"button-col"} />
			</div>
		</div>
	);
}

export default Game;
