import styled from "styled-components";
import Square from "./Square.js";

const BoardSpace = styled.button`
	position: absolute;
	top: 10%;
	left: 35%;
	z-index: -1;
	border: none;
	padding: 0;
	background-color: #a9a9a9;
	height: 500px;
	width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const Board = () => {
	const randNums = [];

	while (randNums.length !== 10) {
		const randNum = Math.floor(Math.random() * (100 - 1) + 1);
		if (!randNums.includes(randNum)) randNums.push(randNum);
	}

	const squares = [];

	const fillBoard = () => {
		for (let i = 1; i <= 100; i++) {
			// generate square
			// if square id = random array id, give it mine = true
			const newSquare = <Square id={i} mine={randNums.includes(i) ? true : false}/>
			squares.push(newSquare);
			console.log(newSquare.props)
		}
	}
	fillBoard();

	// const revealMines = () => {
	// 	squares.map(square => console.log(square.mine))
	// }
	// revealMines();

	return (
		<BoardSpace>
			{squares}
		</BoardSpace>
	);
};

export default Board;
