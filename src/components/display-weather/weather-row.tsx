import React from "react";
import moment from "moment-timezone";
import { WeatherRowStyle } from "./display-weather.style";
import temperatureIcon from "../../icons/svg/HeatIcon.svg";

export const WeatherRow = ({ weather }) => {
	const { icon, main, description } = weather.data.weather[0];
	const { temp, feels_like } = weather.data.main;
	return (
		<WeatherRowStyle>
			<div className="city-country">{`${weather.data.name}, ${weather.data.sys.country}`}</div>
			<div className="main-weather">
				<div className="maintext">{main}</div>
				<img
					alt={main}
					src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
				/>
				<div>{description} </div>
			</div>
			<div className="date-time">
				{moment(weather.dt).format("hh:ss DD/MM/YYYY")}
			</div>

			<div className="temperature">
				<img alt="temperature" src={temperatureIcon} />
				<div className="maintext">{temp}</div>
			</div>
			<div className="feels-like">Feels like: {feels_like}</div>
		</WeatherRowStyle>
	);
};

export default WeatherRow;
