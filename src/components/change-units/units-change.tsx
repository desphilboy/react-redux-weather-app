import React from "react";
import { connect } from "react-redux";
import { setUnits } from "../../store/actions";
import { UnitChangerDiv } from "./change-units.style";

export const View = ({ changeUnits, units }) => (
	<UnitChangerDiv>
		<label>Unit types:</label>
		<select name="units" onChange={changeUnits} value={units}>
			<option value="metric">Metric</option>
			<option value="imperial">Imperial</option>
		</select>
	</UnitChangerDiv>
);

const mapDispatch = (dispatch) => ({
	changeUnits: (event) => dispatch(setUnits(event.target.value)),
});

const mapState = (state) => ({
	units: state.units,
});

export default connect(mapState, mapDispatch)(View);
