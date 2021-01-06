import React from "react";
import ReactDOM from "react-dom";
import Counter from "./ImplementationTesting";

import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
// в статье использовался адаптер для 16 и валился с этим тестом, это неофиц.
// адаптер
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

test("increment method increments count", () => {
  const wrapper = mount(<Counter />);

  expect(wrapper.instance().state.count).toBe(0);

  wrapper.instance().increment(); // вызываю императивные хэндлеры напрямую
  expect(wrapper.instance().state.count).toBe(1);
  // симулирую клик, вызывая инвет(в случае классового компонента важно, чтобы хэндлер был под .bind(this))
  wrapper.find("button.counter-button").simulate("click");
  expect(wrapper.instance().state.count).toBe(2);
  // изменяю стейт напрямую
  wrapper.setState({ count: 1 });
  expect(wrapper.instance().state.count).toBe(1);
});
