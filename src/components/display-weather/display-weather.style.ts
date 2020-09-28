import styled from "styled-components";

export const WeatherRowStyle = styled.div`
	border: 1px solid orange;
	border-radius: 10px;
	margin: 2px;
	display: flex;
	max-width: 200px;
	flex-direction: column;
	.city-country {
		font-weight: bold;
		font-size: 20px;
	}
	.date-time {
		font-size: 10px;
		font-weight: bold;
	}
	.main-weather {
		div.maintext {
			color: Orange;
			font-size: 24px;
			font-weight: bold;
			margin: 0;
		}

		div.description {
		}
		display: flex;
		flex-direction: column;
		justify-contents: center;

		img {
			margin-top: -40px;
			margin-bottom: -30px;
		}
	}
	.temperature {
		margin-top: 24px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		img {
			width: 60px;
			height: 60px;
			margin-top: -20px;
			margin-bottom: -5px;
		}
		div.maintext {
			color: Blue;
			font-size: 28px;
			font-weight: bold;
			margin: 0;
		}
	}
	.feels-like {
		margin-top: 10px;
		font-size: 20px;
		color: darkGray;
		margin-bottom: 30px;
	}
`;

export const DisplayWeatherStyle = styled.div`
	button {
		margin-right: -30px;
		width: 30px;
		height: 30px;
		font-size: 28px;
		top: 0%;
		right: 0%;
		opacity: 0.1;
		background-color: pink;
		border: 1px solid pink;
		border-radius: 10px;
	}
	min-width: 240px;
	min-height: 300px;

	flex-wrap: wrap;
	width: 80%;
	display: flex;
	flex-direction: row;
	&:hover {
		button {
			opacity: 0.7;
		}
	}
`;
