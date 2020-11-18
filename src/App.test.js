import React from 'react';
import App from './App';
import Home from "./screens/HomeScreen";
import Park from "./screens/parkering";
import ItemCard from "./Components/ItemCard";

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



// it("renders correctly with no error message", () => {
//   const wrapper = mount(<App />);
//   expect(wrapper.state("error")).toEqual(null);
// });

// it("finds the button for renting an add", () => {
//   // eslint-disable-next-line no-undef
//   const wrapper = shallow(<Park />);
//   wrapper.find().at(0).simulate('click');
// });

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText("Velkommen!");
//   expect(linkElement).toBeInTheDocument();
// });

