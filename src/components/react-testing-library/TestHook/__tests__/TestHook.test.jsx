import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";

import TestHook from "../TestHook";
import App from "../../../../App";
import axiosMock from "axios";

// нужно вызывать это для анмаунта компонентов, т.к. мы не используем shallow render
//  shallow render - рендер компонента без чайлодов
afterEach(cleanup);

it("Test in state is changed, button clicked", () => {
  const { getByText } = render(<TestHook />);
  expect(getByText(/Initial/i).textContent).toBe("Initial State");
  fireEvent.click(getByText("State Change Button"));

  expect(getByText(/Initial/i).textContent).toBe("Initial State Changed");
});

it("Button click changes props", async () => {
  axiosMock.get.mockResolvedValue({ data: { title: "test title" } });

  const { findByText } = render(
    <App>
      <TestHook />
    </App>
  );
  expect((await findByText(/Moe/i)).textContent).toBe("Moe");

  fireEvent.click(await findByText("Change Name"));

  expect((await findByText(/Steve/i)).textContent).toBe("Steve");
});
