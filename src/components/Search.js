import React, { useState } from "react";
import { connect } from "react-redux";
import { typeZip, typePlacename, searchLocation } from "../store/actions";

const SearchBar = ({
   icityValue,
   izipValue,
   readyClass,
   placenameHandler,
   zipHandler,
}) => {
   const [cityValue, setCityValue] = useState(icityValue);
   const [zipValue, setZipValue] = useState(izipValue);

   const changeZip = (event) => setZipValue(event.target.value);
   const changeCity = (event) => setCityValue(event.target.value);

   return (
      <form className={`locator`}>
         <h2>{`Choose your Location`}</h2>

         <input
            name="cityValue"
            type="text"
            placeholder="Search by City Name"
            value={cityValue}
            onChange={changeCity}
            onKeyDown={placenameHandler}
         />

         <input
            name="zipValue"
            type="number"
            placeholder="Search by Zip"
            value={zipValue}
            onChange={changeZip}
            onKeyDown={zipHandler}
         />
      </form>
   );
};

const mapStateToProps = (state) => {
   return {
      cityValue: state.userInput.cityValue,
      zipValue: state.userInput.zipValue,
      readyClass: state.class,
   };
};

const mapDispatchToProps = (dispatch) => ({
   placenameHandler: (e) => dispatch(typePlacename(e)),
   zipHandler: (e) => dispatch(typeZip(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
