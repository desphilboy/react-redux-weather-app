import React from "react";
import { withRouter } from "react-router-dom";
import { Spinner1 } from "./WeatherSpinner";
import { connect } from "react-redux";
import {
   LogoHeaderStyle,
   LogoHeaderStyleAtSide,
} from "../css/LogoHeader.style";
import SVIcon from "../svgIcons/service-victoria.png";
// import ReduxLogo from "../svgIcons/redux-logo.svg";

const LogoHeader = ({ stepAside, history }) =>
   stepAside(history) ? (
      <LogoHeaderStyleAtSide>
         <img className="slowSpin" src={SVIcon} />
         <Spinner1 />
      </LogoHeaderStyleAtSide>
   ) : (
      <LogoHeaderStyle>
         <img className="slowSpin" src={SVIcon} />
         <Spinner1 />
      </LogoHeaderStyle>
   );

const atSide = ({
   forecastReady,
   weatherHistoryReady,
   weatherSpinnerOpen,
   callerError,
   history,
}) =>
   (history.location.pathname !== "/" &&
      (forecastReady || weatherHistoryReady)) ||
   weatherSpinnerOpen ||
   callerError;

const mapStateToProps = (state) => {
   const weatherSpinnerOpen = state.show.weatherSpinner;
   const forecastReady = state.data.forecast.ready;
   const weatherHistoryReady = state.data.history.ready;
   const callerError = state.data.callerError;

   return {
      stepAside: (history) =>
         atSide({
            forecastReady,
            weatherHistoryReady,
            weatherSpinnerOpen,
            callerError,
            history,
         }),
   };
};

export default connect(mapStateToProps)(withRouter(LogoHeader));
