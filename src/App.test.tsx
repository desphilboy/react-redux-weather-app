import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import App from "./App.tsx";

test("renders learn react link", () => {
	const wrapper = render(
		<Provider store={store}>
			<App loading={false} error={false} />
		</Provider>
	);
	expect(wrapper).toMatchSnapshot();
});
