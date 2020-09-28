import * as REDUCERS from "./reducers";
import * as ACTIONS from "./actions";

describe("Reducers", () => {
	describe("apiCall reducer", () => {
		it("changes inProgress to true for startApi", () => {
			const newState = REDUCERS.apiCall(null, ACTIONS.startApi());
			expect(newState).toEqual({
				data: false,
				error: false,
				inProgress: true,
			});
		});

		it("changes inProgress false and data for doneApi", () => {
			const newState = REDUCERS.apiCall(null, ACTIONS.doneApi("data"));
			expect(newState).toEqual({
				data: "data",
				error: false,
				inProgress: false,
			});
		});

		it("changes inProgress false and error for errorApi", () => {
			const newState = REDUCERS.apiCall(null, ACTIONS.errorApi("error"));
			expect(newState).toEqual({
				data: false,
				error: "error",
				inProgress: false,
			});
		});

		it("does not do anything for other actions", () => {
			const newState = REDUCERS.apiCall(
				undefined,
				ACTIONS.setUnits("metric")
			);
			expect(newState).toEqual({
				data: false,
				error: false,
				inProgress: false,
			});
		});
	});

	describe("weatherRecords reducer", () => {
		it("adds data to records for doneApi", () => {
			const newState = REDUCERS.weatherRecords(
				REDUCERS.INITIAL_STATE.weatherRecords,
				ACTIONS.doneApi("data1")
			);
			expect(newState).toEqual([
				{
					data: "data1",
					error: false,
					inProgress: false,
				},
			]);
		});

		it("clears data for clearRecords", () => {
			const newState = REDUCERS.weatherRecords(
				REDUCERS.INITIAL_STATE.weatherRecords,
				ACTIONS.clearRecords()
			);
			expect(newState).toEqual([]);
		});
	});
});
