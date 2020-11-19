import React from 'react';
import App from './App';
import Home from "./screens/HomeScreen";
import Park from "./screens/Park";

import Adapter from "enzyme-adapter-react-16";
import {configure, shallow, mount,
  render} from "enzyme";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  // eslint-disable-next-line no-undef
  shallow(<App />);
});

it("renders without crashing", () => {
  // eslint-disable-next-line no-undef
  shallow(<Park />);
});

it("renders Account header", () => {
  const wrapper = shallow(<Home />);
  const welcome = <h1>Velkommen! </h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});


