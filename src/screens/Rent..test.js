import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
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

  it('Registered form gets saved', () => {
    const creator = mount(<AddItem name="adresse" label="name" price="price"/>);
    const label = creator.find('label')
    expect(label).toHaveLenth(1);
    expect(label.prop('htmlFor')).toEqual('adresse');
    expect(label.text()).toEqual('adresse');

    const input = creator.find('input');
    expect(input).toHaveLenth(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('adresse');
    expect(input.prop('price')).toEqual('price');

  });

})
