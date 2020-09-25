import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { AppStyle } from "./App.style";

import SearchBar from "./components/Search";
import BackButton from "./components/BackButton";
import ThemeChanger from "./components/ThemeChanger";
import LogoHeader from "./components/LogoHeader";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { geolocateUser } from "./store/actions";

const App: React.FunctionComponent = () => {
  useEffect(() => {
    geolocateUser();
  }, []);

  return (
    <AppStyle>
      <h1>Service Victoria Forecast App</h1>
      <ThemeChanger />
      <LogoHeader />
      <SearchBar />
      <Body />
      <Footer />
      <BackButton />
    </AppStyle>
  );
}; // App

export default App;
