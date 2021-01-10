import React from "react";
import {
  act,
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from "@testing-library/react";
// импортить нужно с самого модуля, но в __mock__ нужно создавать
// файл с таким же именем как и модуль
import axiosMock from "axios";

import TestAxios from "../TestAxios";

afterEach(cleanup);

it("Async axios request works", async () => {
  // указываем, что будет возвращать промис с этого метода
  axiosMock.get.mockResolvedValue({ data: { title: "test title" } });
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  const { getByText, getByTestId, rerender, findByTestId } = render(
    <TestAxios url={url} />
  );

  expect(getByText(/...Loading/i).textContent).toBe("...Loading");

  /*
    title может еще не находится в доме, (т.к. промис в эффекте не зарезолвился), 
    поэтому просто getByTestId использовать нельзя. Либо  getByTestId нужно оборачивать
    в waitFor. findByTestId это waitFor(getByTestId(...))
  */
  const resolvedEl = await findByTestId("title");

  expect(resolvedEl.textContent).toBe("test title");

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
