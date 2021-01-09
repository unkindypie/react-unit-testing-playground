import React from "react";
import { act, render, fireEvent, cleanup } from "@testing-library/react";

import App from "../../../App";
import TestContext from "./TestContext";
import Context from "../../../contexts/test-context";

afterEach(cleanup);

it("Context value is updated by child component", () => {
  const { getByText } = render(
    <App>
      {/* 
        вот сюда можно вообще не вкладывать чайлды, App все равно
        не рендерит их. Это нужно только для читабильности и если
        их закомментить, то тест все равно будет работать. Все потому
        что это mount render(не shallow render), т.е. чайлды и чайлды чайлдов
        маунтятся/рендерятся.
      */}
      <Context.Provider>
        <TestContext />
      </Context.Provider>
    </App>
  );

  expect(getByText(/Some/i).textContent).toBe("Some text");

  fireEvent.click(getByText("Change Text"));

  expect(getByText(/Some/i).textContent).toBe("Some other text");
});
