import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Rent from "./Rent";
import Home from "./HomeScreen";
import Park from "./Park";
import {ItemCard} from "../Components/ItemCard";
import {AddItem} from "../Components/AddItem";

describe('Rent Component', () => {

  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
  })

  it('renders correctly', () => {
    const component = shallow(<Rent/>)
    expect(component).toMatchSnapshot()
  })

  it("Register form exists", () => {
    const wrapper = shallow(<Park/>);
    const formHeader = <h1 className="display-4 my-4 text-center text-muted">Parkeringer</h1>;
    expect(wrapper.contains(formHeader)).toEqual(true);
    expect(wrapper.contains(AddItem)).toEqual(true);
    expect(wrapper.contains(ItemCard)).toEqual(true);
    // expect(wrapper.find("Card.Card1").text());

  });

})
