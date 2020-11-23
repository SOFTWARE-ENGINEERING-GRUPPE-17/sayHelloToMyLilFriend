import React from 'react';
import App from './App';
import Home from "./screens/HomeScreen";
import Park from "./screens/Park";

import Adapter from "enzyme-adapter-react-16";
import {configure, shallow, mount,
  render} from "enzyme";
configure({ adapter: new Adapter() });

it("renders a component without crashing", () => {
  // eslint-disable-next-line no-undef
  shallow(<App />);
});

it("renders a component without crashing", () => {
  // eslint-disable-next-line no-undef
  shallow(<Park />);
});

// Test checking that Home screen is not crashing
it("renders a component without crashing", () => {
  // eslint-disable-next-line no-undef
  shallow(<Home />);
});

// Test checking that Home Screen header "Velkommen" is visible
it("renders Home header", () => {
  const wrapper = shallow(<Home />);
  const welcome = <h1>Velkommen! </h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});


