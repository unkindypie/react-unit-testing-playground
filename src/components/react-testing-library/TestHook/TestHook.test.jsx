// import React from "react";
// import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";

import TestHook from "./TestHook";
import App from "../../../App";

// нужно вызывать это для анмаунта компонентов, т.к. мы не используем shallow render
//  shallow render - рендер компонента без чайлодов
afterEach(cleanup);

it("Test in state is changed, button clicked", () => {
  const { getByText } = render(<TestHook />);
  expect(getByText(/Initial/i).textContent).toBe("Initial State");
  fireEvent.click(getByText("State Change Button"));

  expect(getByText(/Initial/i).textContent).toBe("Initial State Changed");
});

it("Button click changes props", () => {
  const { getByText } = render(
    <App>
      <TestHook />
    </App>
  );
  expect(getByText(/Moe/i).textContent).toBe("Moe");

  fireEvent.click(getByText("Change Name"));

  expect(getByText(/Steve/i).textContent).toBe("Steve");
});
