import React from "react";
import { connect } from "react-redux";

const WeatherRow = ({ weather }) => <div>{JSON.stringify(weather)}</div>;

const DisplayView = ({ rows = [] }) => {
	return (
		<div>
			{rows.map((row) => (
				<WeatherRow weather={row} />
			))}
		</div>
	);
};

const mapState = (state) => ({ rows: state.weatherRecords });

export default connect(mapState)(DisplayView);
