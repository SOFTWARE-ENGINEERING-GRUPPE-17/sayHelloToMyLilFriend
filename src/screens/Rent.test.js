import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Rent from "./Rent";
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

  //Tester for the added item card. This tester will simulate a user input and check that the input and output is the same.
  it('Registered form gets saved', () => {
    const creator = mount(<AddItem name="adresse" label="name" price="price" image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw17Li6F_Ei1Zp9PMG9Fee9E&ust=1606302309985000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj_3MaEm-0CFQAAAAAdAAAAABAD" onChange="onChange" onSubmit="onSubmit"/>);
    const label = creator.find('label')
    expect(label.prop('htmlFor')).toEqual('adresse');
    expect(label.text()).toEqual('adresse');

    const input = creator.find('input');
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('adresse');
    expect(input.prop('price')).toEqual('price');
    expect(input.prop('image')).toEqual('https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw17Li6F_Ei1Zp9PMG9Fee9E&ust=1606302309985000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj_3MaEm-0CFQAAAAAdAAAAABAD');
    expect(input.prop('onChange')).toEqual('onChange');
    expect(input.prop('onSubmit')).toEqual('onSubmit');


  });

})
