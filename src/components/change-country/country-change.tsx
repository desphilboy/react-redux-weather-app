import React from "react";
import { connect } from "react-redux";
import { setCountry } from "../../store/actions";
import { CountryChangerDiv } from "./change-country.style";

export const View = ({ changeCountry, country }) => (
	<CountryChangerDiv>
		<label>Country:</label>
		<select name="country" onChange={changeCountry} value={country}>
			<option value="AU">Australia</option>
			<option value="UK">England</option>
			<option value="NZ">New Zealand</option>
			<option value="IN">India</option>
			<option value="US">United States</option>
			<option value="IR">Iran</option>
			<option value="RU">Russia</option>
			<option value="IT">Italy</option>
		</select>
	</CountryChangerDiv>
);

const mapDispatch = (dispatch) => ({
	changeCountry: (event) => dispatch(setCountry(event.target.value)),
});

const mapState = (state) => ({
	country: state.country,
});

export default connect(mapState, mapDispatch)(View);

//<View  changeCountry={skfjksj} country={sjfksjfkls} />
