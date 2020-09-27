import styled from "styled-components";
import ServiceVictoria from "./icons/service-victoria.png";

export const AppStyle = styled.div`
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 30px 50px;
	padding-bottom: 50px;
	text-align: center;
`;

export const BkSv = styled.div`
	border: 1px solid orange;
	border-radius: 50px;
	width: 100%;
	height: 100%;
	position: absolute;
	background-image: url(${ServiceVictoria});
	opacity: 0.08;
	z-index: -1;
	margin: 0;
	padding: 0;
`;

export const OptionRow = styled.div`
	position: relative;
	max-width: 80%;
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
	@media only screen and (max-width: 700px) {
		flex-direction: column;
		flex-wrap: wrap;
		div {
			justify-content: center;
			margin-top: 10px;
		}
	}
`;
