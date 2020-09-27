import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/thunks";
import { SearchWeatherStyle, SearchRowStyle } from "./australia-weather.style";

export const AustraliaWeather = ({ changeCountry, fetchConditions }) => {
	const keyPress = (event) => {
		console.log(event.key);
		console.log(event.target.value);

		if (event.key === "Enter") {
			console.log("calling");
			fetchConditions(event);
		}
	};

	return (
		<SearchWeatherStyle>
			<SearchRowStyle>
				<label>Select city from list:</label>
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
				<input name="city" type="text" onKeyDown={keyPress} />
			</SearchRowStyle>
		</SearchWeatherStyle>
	);
};

const mapDispatch = (dispatch) => ({
	fetchConditions: (event) =>
		dispatch(fetchWeather({ city: event.target.value })),
});

export default connect(null, mapDispatch)(AustraliaWeather);
