import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DisplayWeatherStyle } from "./display-weather.style";
import { clearRecords, setCountry } from "../../store/actions";
import { fetchWeather } from "../../store/thunks";

import WeatherRow from "./weather-row";

interface DisplayViewInterface {
	rows: object[];
	clearAll: () => void;
	resetCountry: () => void;
	fetchMajorCities: () => void;
}

export const DisplayView: React.FunctionComponent<DisplayViewInterface> = ({
	rows = [],
	clearAll,
	resetCountry,
	fetchMajorCities,
}) => {
	useEffect(() => {
		if (rows.length === 0) {
			resetCountry();
			fetchMajorCities();
		}
	});
	return (
		<DisplayWeatherStyle>
			{rows.length ? (
				<button onClick={clearAll}>X</button>
			) : (
				<div>Select a city in above box to see the weather</div>
			)}
			{rows.map((row, index) => (
				<WeatherRow weather={row} key={`key-${index}`} />
			))}
		</DisplayWeatherStyle>
	);
};

export const mapDispatch = (dispatch) => ({
	clearAll: () => dispatch(clearRecords()),
	resetCountry: () => dispatch(setCountry("AU")),
	fetchMajorCities: () => {
		dispatch(fetchWeather({ city: "Melbourne" }));
		dispatch(fetchWeather({ city: "Sydney" }));
		dispatch(fetchWeather({ city: "Brisbane" }));
		dispatch(fetchWeather({ city: "Adelaide" }));
	},
});

export const mapState = (state) => ({
	rows: state.weatherRecords,
});

export default connect(mapState, mapDispatch)(DisplayView);
