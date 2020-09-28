import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/thunks";
import { SearchWeatherStyle, SearchRowStyle } from "./australia-weather.style";

interface AustraliaWeatherInterface {
	changeCountry: (string) => void;
	fetchConditions: (object) => void;
}

export const AustraliaWeather: React.FunctionComponent<AustraliaWeatherInterface> = ({
	changeCountry,
	fetchConditions,
}): any => {
	const keyPress = (event) => {
		if (event.key === "Enter") {
			fetchConditions(event);
		}
	};

	return (
		<SearchWeatherStyle>
			<SearchRowStyle>
				<label data-testid="select-city-label">
					Select city from list:
				</label>
				<select name="city" onChange={fetchConditions}>
					<option value="Sydney">Sydney</option>
					<option value="Melbourne">Melbourne</option>
					<option value="Alice Springs">Alice Springs</option>
					<option value="Adelaide">Adelaide</option>
					<option value="Hobart">Hobart</option>
					<option value="Perth">Perth</option>
					<option value="Canberra">Canberra</option>
					<option value="Brisbane">Brisbane</option>
				</select>
			</SearchRowStyle>
			<SearchRowStyle>
				<label> or type city's name:</label>
				<input
					data-testid="city-name-input"
					name="city"
					type="text"
					onKeyDown={keyPress}
				/>
			</SearchRowStyle>
		</SearchWeatherStyle>
	);
};

const mapDispatch = (dispatch: (object) => void): object => ({
	fetchConditions: (event) =>
		dispatch(fetchWeather({ city: event.target.value })),
});

export default connect(null, mapDispatch)(AustraliaWeather);
