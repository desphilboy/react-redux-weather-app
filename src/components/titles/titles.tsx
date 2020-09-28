import React from "react";
import { TitlesDiv, TitlesRow } from "./titles.style";
import weatherIcon from "../../icons/svg/PartlyCloudyIcon.svg";

export const Title = () => (
	<TitlesDiv>
		<TitlesRow>
			<img alt="weather" src={weatherIcon}></img>
			<h1>Service Victoria Weather</h1>
		</TitlesRow>
	</TitlesDiv>
);

export default Title;
