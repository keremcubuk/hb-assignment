import React from 'react'
import { shallow } from 'enzyme'
import DropdownFilter from '../DropdownFilter';

describe('DropdownFilter Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<DropdownFilter data={{}} />);
    expect(wrapper.find('Dropdown').length).toBe(1);
  })
})