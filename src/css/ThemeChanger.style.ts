import styled from "styled-components";

export const ThemeChangerStyle = styled.div`
	position: absolute;
	top: 0px;
	right: 20px;

	h5 {
		display: inline-block;
		:hover {
			border-bottom: 1px solid var(--foreground-color);
			cursor: pointer;
		}
	}
`;
