import React from "react";
import { TitlesDiv, TitlesRow } from "./titles.style";
import weatherIcon from "../../icons/svg/PartlyCloudyIcon.svg";

export const Title = () => (
	<TitlesDiv>
		<TitlesRow>
			<img src={weatherIcon}></img>
			<h1>Service Victoria Weather</h1>
		</TitlesRow>
		<h4>By Iman Dezfuly</h4>
	</TitlesDiv>
);

export default Title;
