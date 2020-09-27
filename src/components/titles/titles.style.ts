import styled from "styled-components";
import weatherIcon from "../../icons/svg/PartlyCloudyIcon.svg";

export const TitlesDiv = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;

	h4 {
		min-width: 100px;
		margin-top: 0;
		font-size: 1.5vw;
	}

	@media only screen and (max-width: 600px) {
		h4 {
			font-size: 12px;
		}
	}
`;

export const TitlesRow = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 0;
	display: flex;

	img {
		width: 40%;
		min-width: 100px;
	}

	h1 {
		min-width: 200px;
		margin: 0;
		margin-top: 6vw;
		font-size: 3vw;
	}

	@media only screen and (max-width: 600px) {
		flex-direction: column;
		h1 {
			margin-top: 2px;
			font-size: 18px;
		}
	}
`;
