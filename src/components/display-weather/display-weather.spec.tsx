import React from "react";
import { mapDispatch, mapState, DisplayView } from "./display-weather";
import * as THUNK from "../../store/thunks";
import testRenderer from "react-test-renderer";
import { SAMPLEROWS } from "./__fixtures__/weather-data.sample";
describe("displayWeather", () => {
	describe("mapDispatch", () => {
		const dispatch = jest.fn();
		let map;
		beforeEach(() => {
			map = mapDispatch(dispatch);
			jest.clearAllMocks();
		});

		it("returns clearAll, resetCountry, fetchMajorCities", () => {
			expect(map).toEqual({
				clearAll: expect.any(Function),
				resetCountry: expect.any(Function),
				fetchMajorCities: expect.any(Function),
			});
		});

		it("clearAll, calls Dispatch with CLEAR_RECORDS action", () => {
			map.clearAll();
			expect(dispatch).toHaveBeenCalledWith({
				type: "CLEAR_RECORDS",
			});
		});

		it("fetchMajorcities, calls dispatch with fetchWeather for 4 major cities", () => {
			THUNK.fetchWeather = jest.fn((param) => param);

			map.fetchMajorCities();

			[ "Adelaide", "Brisbane"].forEach(
				(majorCity) => {
					expect(dispatch).toHaveBeenCalledWith({ city: majorCity });
				}
			);

			map.fetchMajorCities();
			[ "Adelaide", "Brisbane"].forEach(
				(majorCity) => {
					expect(THUNK.fetchWeather).toHaveBeenCalledWith({
						city: majorCity,
					});
				}
			);
		});

		it("resetCountry, calls dispatch with SET_COUNTRY action and value 'AU'", () => {
			map.resetCountry();
			expect(dispatch).toHaveBeenCalledWith({
				payload: "AU",
				type: "SET_COUNTRY",
			});
		});
	});

	describe("mapState", () => {
		const mockState = { weatherRecords: [{ somekey: "someValue" }] };
		let map;
		beforeEach(() => {
			map = mapState(mockState);
			jest.clearAllMocks();
		});

		it("uses state to fill rows value with the weatherRecords from state", () => {
			expect(map.rows).toEqual([
				{
					somekey: "someValue",
				},
			]);
		});
	});

	describe("View", () => {
		let testParams = {
			rows: [],
			clearAll: jest.fn(),
			resetCountry: jest.fn(),
			fetchMajorCities: jest.fn(),
		};

		it("renders correctly with empty rows", () => {
			const wrapper = testRenderer.create(
				<DisplayView {...testParams} />
			);
			expect(wrapper).toMatchSnapshot();
		});

		it("renders correctly with rows", () => {
			testParams.rows = SAMPLEROWS;
			const originalDate = global.Date.now;
			global.Date.now = () => 1601235380;
			const wrapper = testRenderer.create(
				<DisplayView {...testParams} />
			);
			expect(wrapper).toMatchSnapshot();
			global.Date.now = originalDate;
		});
	});
});
