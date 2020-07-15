import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.exists()).toBe(true);
  })
})