import React, { useEffect, Fragment } from "react";

import { AppStyle, BkSv, OptionRow } from "./App.style";
import { connect } from "react-redux";
import { fetchWeather } from "./store/thunks";
import AustralianWeather from "./components/australia-weather/";
import UnitChanger from "./components/change-units";
import CountryChanger from "./components/change-country";
import Titles from "./components/titles/";

const App = ({ ftch, loading, temperature, wind }) => {
  useEffect(() => {
    ftch();
  }, []);

  return (
    <Fragment>
      <BkSv />
      <AppStyle>
        <Titles />
        <OptionRow>
          <UnitChanger />
          <CountryChanger />
        </OptionRow>

        <AustralianWeather />
        {loading && <div> Loading ... </div>}
        {!loading && (
          <Fragment>
            <div>temperature: {temperature}</div>
            <div>
              wind: {wind && wind.speed}, {wind && wind.deg} degree
            </div>
          </Fragment>
        )}
      </AppStyle>
    </Fragment>
  );
}; // App

const mapState = (state) => ({
  loading: state.apiCall.inProgress,
  temperature: state.apiCall.data && state.apiCall.data.temperature,
  wind: state.apiCall.data && state.apiCall.data.wind,
});

const mapDispatch = (dispatch) => ({
  ftch: () => {
    console.log("inside ftch");
    dispatch(fetchWeather());
  },
});

export default connect(mapState, mapDispatch)(App);
