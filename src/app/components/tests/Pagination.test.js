import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../Pagination';
import * as mockData from '../../data/data.json'

describe('Pagination Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Pagination linkList={mockData.linkList} />);
    expect(wrapper.exists()).toBe(true);
  });
})