import React from "react";
import { setTheme } from "../store/actions";
import { connect } from "react-redux";
import { ThemeChangerStyle } from "../css/ThemeChanger.style";

const darkColor = "#03031b";
const lightSun = "#f8b62d";
const darkSun = "#f8b62d";

export const darkTheme = {
   name: "nighttime",
   foregroundColor: "white",
   backgroundColor: darkColor,
   sunColor: darkSun,
};

export const lightTheme = {
   name: "daytime",
   foregroundColor: darkColor,
   backgroundColor: "white",
   sunColor: lightSun,
};

const ThemeChanger = ({ activateDarkTheme, activateLightTheme }) => (
   <ThemeChangerStyle>
      <h5 onClick={activateLightTheme}>Light Theme</h5>
      <h5>&nbsp;|&nbsp;</h5>
      <h5 onClick={activateDarkTheme}> Dark Theme</h5>
   </ThemeChangerStyle>
);

const mapDispatchToProps = (dispatch) => ({
   activateDarkTheme: () => dispatch(setTheme(darkTheme)),
   activateLightTheme: () => dispatch(setTheme(lightTheme)),
});

export default connect(null, mapDispatchToProps)(ThemeChanger);
