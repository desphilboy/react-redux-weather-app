import React from "react";
import { View } from "./units-change";
import renderer from "react-test-renderer";

describe("Units Changing Component", () => {
	describe("View only", () => {
		const changeUnitMock = jest.fn();

		it("Renders correctly", () => {
			const wrapper = renderer.create(
				<View changeUnits={changeUnitMock} />
			);
			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
