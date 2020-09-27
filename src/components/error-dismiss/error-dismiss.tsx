import React from "react";
import { ErrorStyle } from "./error-dismiss.style";

export const ErrorDismissView = ({ onDismiss }) => (
	<ErrorStyle>
		Error Happened while trying to retrieve weather conditions{" "}
		<button onClick={onDismiss}>X</button>
	</ErrorStyle>
);

export default ErrorDismissView;
