import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store.ts";
import Component, { AustraliaWeather } from "./austalia-weather";

describe("austaliaWeather Serach component", () => {
	const changeCountryMock = jest.fn();
	const fetchConditionsMock = jest.fn();

	describe("View", () => {
		beforeEach(() => {
			jest.clearAllMocks();
		});

		it("matches the snapshot", () => {
			const wrapper = render(
				<AustraliaWeather
					changeCountry={changeCountryMock}
					fetchConditions={fetchConditionsMock}
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});

		it("renders a label", async () => {
			const { findAllByTestId } = render(
				<AustraliaWeather
					changeCountry={changeCountryMock}
					fetchConditions={fetchConditionsMock}
				/>
			);
			expect(
				await findAllByTestId("select-city-label")
			).toMatchSnapshot();
			expect(await findAllByTestId("city-name-input")).toMatchSnapshot();
		});

		it("renders an input for city name", async () => {
			const { findAllByTestId } = render(
				<AustraliaWeather
					changeCountry={changeCountryMock}
					fetchConditions={fetchConditionsMock}
				/>
			);
			expect(await findAllByTestId("city-name-input")).toMatchSnapshot();
		});

		it("renders an input for city name", async () => {
			const { findAllByTestId } = render(
				<AustraliaWeather
					changeCountry={changeCountryMock}
					fetchConditions={fetchConditionsMock}
				/>
			);
			expect(await findAllByTestId("city-name-input")).toMatchSnapshot();
		});
	});

	describe("Rendering with Redux Store", () => {
		it("renders with redux store", () => {
			const wrapper = render(
				<Provider store={store}>
					<Component />
				</Provider>
			);
			expect(wrapper).toMatchSnapshot();
		});

		it("typing a city name and prssing enter", async () => {
			let action;
			store.dispatch = jest.fn((param) => (action = param));
			const { getByTestId } = render(
				<Provider store={store}>
					<Component />
				</Provider>
			);
			const cityNameInput = getByTestId("city-name-input");
			fireEvent.keyPress(cityNameInput, { key: "A", code: "keyA" });
			fireEvent.keyDown(cityNameInput, { key: "Enter", code: "Enter" });

			expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
		});
	});
});