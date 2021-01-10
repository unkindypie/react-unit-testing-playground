import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import TestControlledForm from "../TestControlledForm";

afterEach(cleanup);

it("Inputting text updates the state", () => {
  const { getByText, getByLabelText } = render(<TestControlledForm />);
  expect(getByText(/Change/i).textContent).toBe("Change: ");

  fireEvent.change(getByLabelText("Input Text:"), {
    target: { value: "Text" },
  });

  expect(getByText(/Change/i).textContent).not.toBe("Change: ");
  expect(getByText(/Change/i).textContent).toBe("Change: Text");
});

it("Submitting form changes state", () => {
  const { getByTestId, getByText } = render(<TestControlledForm />);

  expect(getByText(/Submit Value/i).textContent).toBe("Submit Value: ");

  // ищет в компоненте тег с data-testid=my-custom-form-test-id
  fireEvent.submit(getByTestId("my-custom-form-test-id"), {
    target: { text1: { value: "Text" } },
  });

  expect(getByText(/Submit Value/i).textContent).not.toBe("Submit Value: ");
  expect(getByText(/Submit Value/i).textContent).toBe("Submit Value: Text");
});
