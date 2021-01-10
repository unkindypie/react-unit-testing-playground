import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";

import App from "../../../../App";
import TestContext from "../TestContext";
import Context from "../../../../contexts/test-context";
import axiosMock from "axios";

afterEach(cleanup);

it("Context value is updated by child component", async () => {
  // поскольку здесь маунтится весь App, то нужно мочить данные для аксиоса снова.
  // todo: найти более хорошее решение
  axiosMock.get.mockResolvedValue({ data: { title: "test title" } });

  const { findByText } = render(
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
  // т.к. в App есть useEffect, то нужно делать все через find*

  expect((await findByText(/Some/i)).textContent).toBe("Some text");

  fireEvent.click(await findByText("Change Text"));

  expect((await findByText(/Some/i)).textContent).toBe("Some other text");
});
