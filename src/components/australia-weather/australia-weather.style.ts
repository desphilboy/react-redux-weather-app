import styled from "styled-components";

export const SearchWeatherStyle = styled.div`
	width: 100%;
	min-width: 240px;
	flex-direction: column;
	display: flex;
	margin-top: 30px;
`;

export const SearchRowStyle = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	margin-bottom: 8px;
	justify-content: center;

	label {
		margin-right: 6px;
	}

	input {
		border-radius: 5px;
		width: 120px;
	}
	select {
		border-radius: 5px;
		width: 128px;
	}
	@media only screen and (max-width: 400px) {
		flex-direction: column;
		label {
			margin: auto;
		}

		input {
			width: 80%;
		}
		select {
			width: 80%;
		}
	}
`;
