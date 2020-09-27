import {
   START_API,
   ERROR_API,
   DONE_API,
   SET_COUNTRY,
   SET_UNITS,
} from "./actions";

export const INITIAL_STATE = {
   country: "AU",
   units: "metric",
   apiCall: { data: false, error: false, inProgress: false },
   weatherRecords: [],
};

export const apiCall = (state = INITIAL_STATE, action) => {
   console.log("inside reducer", action);
   switch (action.type) {
      case START_API:
      case ERROR_API:
      case DONE_API:
         return { ...state.apiCall, ...action.payload };
      default:
         return state;
   }
};

export const country = (state = INITIAL_STATE, action) => {
   console.log("inside country reducer", action);
   switch (action.type) {
      case SET_COUNTRY:
         return action.payload;
      default:
         return state;
   }
};

export const units = (state = INITIAL_STATE, action) => {
   console.log("inside units reducer", action);
   switch (action.type) {
      case SET_UNITS:
         return action.payload;
      default:
         return state;
   }
};
