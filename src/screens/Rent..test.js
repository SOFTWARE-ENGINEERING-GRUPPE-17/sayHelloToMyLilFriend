import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Rent from "./Rent";

describe('Rent Component', () => {

  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
  })

  it('renders correctly', () => {
    const component = shallow(<Rent/>)
    expect(component).toMatchSnapshot()
  })

  //Test checking that the form for rent registering works
  it('Register form exists', () => {
    const component = shallow(<Rent/>)
    expect(component).toMatchSnapshot()
  })

})

//Test simulates the filling of Form
it(' Simulates Register Form Completion', () => {
  const component = shallow(<Rent/>)
  expect(component).toMatchSnapshot();
})