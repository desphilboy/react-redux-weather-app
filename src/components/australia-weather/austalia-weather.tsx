import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/thunks";

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
		<div>
			<label>Select one of cities from list:</label>
			<select name="city" onChange={fetchConditions}>
				<option value="Sydney">Sydney</option>
				<option value="Melbourne">Melbourne</option>
				<option value="Alice Springs">Alice Springs</option>
				<option value="Adelide">Adelide</option>
				<option value="Hubart">Hubart</option>
				<option value="Perth">Perth</option>
				<option value="Canberra">Canberra</option>
				<option value="Brisbane">Brisbane</option>
			</select>
			<label> or alternatively type the city name:</label>
			<input name="city" type="text" onKeyDown={keyPress} />
		</div>
	);
};

const mapDispatch = (dispatch) => ({
	fetchConditions: (event) =>
		dispatch(fetchWeather({ city: event.target.value })),
});

export default connect(null, mapDispatch)(AustraliaWeather);
