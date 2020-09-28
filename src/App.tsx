import React, { useEffect, useState, Fragment } from "react";

import { AppStyle, BkSv, OptionRow } from "./App.style";
import { connect } from "react-redux";
import { fetchWeather } from "./store/thunks";
import AustralianWeather from "./components/australia-weather/";
import UnitChanger from "./components/change-units";
import CountryChanger from "./components/change-country";
import Titles from "./components/titles/";
import DisplayWeather from "./components/display-weather/";
import ErrorDismiss from "./components/error-dismiss";

const App = ({ loading, temperature, wind, error }) => {
  const [showDismiss, setShowDismiss] = useState(false);

  useEffect(() => {
    if (error) {
      setShowDismiss(true);
    }
  }, [error]);

  return (
    <Fragment>
      {showDismiss && <ErrorDismiss onDismiss={() => setShowDismiss(false)} />}
      <BkSv />
      <AppStyle>
        <Titles />
        <OptionRow>
          <UnitChanger />
          <CountryChanger />
        </OptionRow>

        <AustralianWeather />
        {loading && <div> Loading ... </div>}
        {!loading && <DisplayWeather />}
      </AppStyle>
    </Fragment>
  );
}; // App

const mapState = (state) => ({
  loading: state.apiCall.inProgress,
  error: state.apiCall.error,
});

export default connect(mapState)(App);
