// import React from "react";
// import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";

import TestReducer from "./TestReducer";
import * as Actions from "./store/test-reducer/actions";
import {
  TestReducer as Reducer,
  initialState,
} from "./store/test-reducer/reducer";

afterEach(cleanup);

/* 
  C помощью describe можно гурппировать тесты(it) по сущности, которая тестируется в данный момент.
  Это не обязательно.
*/

describe("Testing reducer separately", () => {
  it("initial state should be false", () => {
    expect(initialState).toEqual({ someDummyTestState: false });
  });

  it("changing someDummyTestState from false to true", () => {
    expect(Reducer(initialState, Actions.SUCCESS)).toEqual({
      someDummyTestState: true,
    });
  });
});

// toBe = проверка по значению, т.е. в случае с объектом будет проверять по ссылке.
// toEqual = deep equality, т.е. рекурсивная проверка для объектов(но можно и строки, пофиг)

it("Reducer changes state fro component by click", () => {
  const { getByText } = render(<TestReducer />);
  expect(getByText(/someDummyTestState is/i).textContent).toBe(
    "someDummyTestState is false"
  );

  fireEvent.click(getByText("Dispatch Success"));

  expect(getByText(/someDummyTestState is/i).textContent).toBe(
    "someDummyTestState is true"
  );
});
