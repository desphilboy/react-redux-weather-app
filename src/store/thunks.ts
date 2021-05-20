import { startApi, doneApi, errorApi } from "./actions";

const appId = "ce242e6f1909e3ca32395ead09817fb6";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = ({ city = "Melbourne" } = {}) => (
	dispatch,
	getState
) => {
	// const country = getState().country;
	// const units = getState().units;
	const { country, units } = getState();

	let fetchurl = `${baseUrl}?q=${city || "Melbourne"},${
		country || "AU"
	}&units=${units || "metric"}&appid=${appId}`;

	dispatch(startApi());
	fetch(fetchurl)
		.then((response) => {
			if (!response.ok) {
				dispatch(errorApi(response.statusText));
				throw Error(response.statusText);
			} else {
				return response.json();
			}
		})
		.then((data) => {
			dispatch(doneApi(data));
		})
		.catch((err) => {
			dispatch(errorApi(err));
			console.log(err);
		});
};
