import styled from "styled-components";

export const LogoHeaderStyle = styled.div`
	display: flex;
	width: 100px;
	justify-content: space-around;
	max-height: 100%;
	transition: max-height 0.5s;
	icon {
		margin: 70px;
	}

	img {
		width: 500px;
		border: 1px solid wheat;
		border-radius: 10px;
	}
`;

export const LogoHeaderStyleAtSide = styled.div`
	display: flex;
	width: 100px;
	justify-content: space-around;
	max-height: 0%;
	overflow: hidden;
	transition: max-height 0.5s;
	icon {
		margin-right: 30px;

		margin-top: -20px;
	}
`;
