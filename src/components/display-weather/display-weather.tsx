import React from "react";
import { connect } from "react-redux";
import { DisplayWeatherStyle } from "./display-weather.style";

import WeatherRow from "./weather-row";

export const DisplayView = ({ rows = [] }) => {
	return (
		<DisplayWeatherStyle>
			{rows.map((row) => (
				<WeatherRow weather={row} />
			))}
		</DisplayWeatherStyle>
	);
};

const mapState = (state) => ({ rows: state.weatherRecords });

export default connect(mapState)(DisplayView);
