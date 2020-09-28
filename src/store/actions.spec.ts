import * as ACTIONS from "./actions";

describe("Actions", () => {
	it("startApi returns a payload with inProgress true", () => {
		expect(ACTIONS.startApi()).toEqual({
			type: "START_API",
			payload: {
				data: false,
				error: false,
				inProgress: true,
			},
		});
	});
	it("doneApi returns  a payload with inProgress false and data from caller", () => {
		expect(ACTIONS.doneApi("some data from some api")).toEqual({
			type: "DONE_API",
			payload: {
				data: "some data from some api",

				error: false,
				inProgress: false,
			},
		});
	});
	it("errorApi returns  a payload with inProgress false and error from caller", () => {
		expect(ACTIONS.errorApi("some error")).toEqual({
			type: "ERROR_API",
			payload: {
				data: false,

				error: "some error",
				inProgress: false,
			},
		});
	});

	it("setCountry puts country in payload", () => {
		expect(ACTIONS.setCountry("NZ")).toEqual({
			type: "SET_COUNTRY",
			payload: "NZ",
		});
	});

	it("setUnits puts unit type in payload", () => {
		expect(ACTIONS.setUnits("Imperial")).toEqual({
			type: "SET_UNITS",
			payload: "Imperial",
		});
	});

	it("clearRecords creates an action with the type", () => {
		expect(ACTIONS.clearRecords()).toEqual({
			type: "CLEAR_RECORDS",
		});
	});
});
