import React from "react";
import moment from "moment-timezone";
import { WeatherRowStyle } from "./display-weather.style";
import temperatureIcon from "../../icons/svg/HeatIcon.svg";

export const WeatherRow = ({ weather }) => {
	const { icon, main, description } = weather.data.weather[0];
	const { temp, feels_like , pressure,humidity, temp_min, temp_max} = weather.data.main;
	const dateTime = Date.now();
	
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
				{moment
					.tz(dateTime, "Australia/Melbourne")
					.format("YYYY/MM/DD hh:mm:ss")}
			</div>

			<div className="temperature">
				<img alt="temperature" src={temperatureIcon} />
				<div className="maintext">{temp}</div>
			</div>
			<div className="feels-like">Feels like: {feels_like}</div>

			<div className="pressure"> pressure: {pressure}</div>
			<div className="hamadity">humidity: {humidity}</div>
			<div className= "temp_min">minimum temperature: {temp_min}</div>
		</WeatherRowStyle>
	);
};

export default WeatherRow;
