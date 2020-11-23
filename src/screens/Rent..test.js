import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Rent from "./Rent";
import Home from "./HomeScreen";

describe('Rent Component', () => {

  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
  })

  it('renders correctly', () => {
    const component = shallow(<Rent/>)
    expect(component).toMatchSnapshot()
  })
})
