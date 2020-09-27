import { createActions } from "redux-actions";

export const START_API = "START_API";
export const ERROR_API = "ERROR_API";
export const DONE_API = "DONE_API";

export const SET_COUNTRY = "SET_COUNTRY";

export const SET_UNITS = "SET_UNITS";

export const CLEAR_RECORDS = "CLEAR_RECORDS";

export const { startApi, doneApi, errorApi } = createActions({
	START_API: () => ({ data: false, inProgress: true, error: false }), // payload creator
	DONE_API: (data) => ({ data, inProgress: false, error: false }),
	ERROR_API: (error) => ({ data: false, inProgress: false, error }),
});

export const setUnits = (unitsType) => ({
	type: SET_UNITS,
	payload: unitsType,
});

export const setCountry = (country) => ({
	type: SET_COUNTRY,
	payload: country,
});

export const clearRecords = () => ({
	type: CLEAR_RECORDS,
});
