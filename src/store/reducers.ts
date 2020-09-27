import {
   START_API,
   ERROR_API,
   DONE_API,
   SET_COUNTRY,
   SET_UNITS,
   CLEAR_RECORDS,
} from "./actions";

export const INITIAL_STATE = {
   country: "AU",
   units: "metric",

   apiCall: { data: false, error: false, inProgress: false },
   weatherRecords: [],
};

export const apiCall = (state = INITIAL_STATE.apiCall, action) => {
   console.log("inside reducer", action);
   switch (action.type) {
      case START_API:
      case ERROR_API:
      case DONE_API:
         return { ...state, ...action.payload };
      default:
         return state;
   }
};

export const country = (state = INITIAL_STATE.country, action) => {
   console.log("inside country reducer", action);
   switch (action.type) {
      case SET_COUNTRY:
         return action.payload;
      default:
         return state;
   }
};

export const units = (state = INITIAL_STATE.units, action) => {
   console.log("inside units reducer", action);
   switch (action.type) {
      case SET_UNITS:
         return action.payload;
      default:
         return state;
   }
};

export const weatherRecords = (
   state = INITIAL_STATE.weatherRecords,
   action
) => {
   console.log("inside units reducer", action);
   switch (action.type) {
      case DONE_API:
         return [...state, action.payload];
      case CLEAR_RECORDS:
         return [];
      default:
         return state;
   }
};
