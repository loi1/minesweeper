import styled from "styled-components";
import { useState } from "react";

const SquareButton = styled.button`
	border: 1px solid grey;
	background-color: #add8e6;
	height: 50px;
	width: 50px;
	cursor: pointer;
	z-index: 1;
	&:hover {
		background-color: blue;
		color: white;
	}
`;

const Square = ({id, mine}) => {
	const [clicked, setClicked] = useState("false");

	function handleClick(e) {
		console.log(
			`${id} is a bomb: ${mine}`
		);
		setClicked("true");
	}

	return (
		<SquareButton id="" mine="" onClick={handleClick}>
			{clicked}
		</SquareButton>
	);
};

export default Square;
