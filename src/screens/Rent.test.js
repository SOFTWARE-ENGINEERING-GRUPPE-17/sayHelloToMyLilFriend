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
    const formHeader = <h1 class="display-4 my-4 text-center text-muted">Parkeringer</h1>;
    expect(wrapper.contains(formHeader)).toEqual(false);
    expect(wrapper.find(AddItem).contains(""));
    expect(wrapper.find(ItemCard).contains(""));
    // expect(wrapper.find("Card.Card1").text());

  });

  //Tester for the added item card. This tester will simulate a user input and check that the input and output is the same.
  it('Registered form gets saved', () => {
    const creator = mount(<AddItem name="adresse" label="name" price="price" image="../images/1.png" />);
    const label = creator.find('label')
    expect(label.prop('htmlFor')).toEqual('adresse');
    expect(label.text()).toEqual('adresse');

    const input = creator.find('input');
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('adresse');
    expect(input.prop('price')).toEqual('price');
    expect(input.prop('image')).toEqual('../images/1.png');


  });

})
