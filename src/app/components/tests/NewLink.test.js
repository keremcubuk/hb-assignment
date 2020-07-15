import React from 'react'
import { shallow } from 'enzyme'
import NewLink from '../NewLink';

describe('NewLink Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<NewLink data={{}} />);
    expect(wrapper.find('Row').length).toBe(1);
  })
})