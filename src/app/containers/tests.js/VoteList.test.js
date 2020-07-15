import React from 'react'
import { shallow, mount } from 'enzyme'
import VoteList from '../VoteList';
import { useDispatch, useSelector } from 'react-redux';
import * as mockData from '../../data/data.json'

jest.mock(`react-redux`, () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('VoteList Component', () => {
  beforeEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
  });

  test('Renders Row Elements', () => {
    const wrapper = shallow(<VoteList />);
    expect(wrapper.find('Row').length).toBe(1);
  });

  test('Checks NewLink Component', () => {
    const wrapper = shallow(<VoteList />);
    expect(wrapper.find('NewLink').length).toBe(1);
  });

  test('Checks Pagination', () => {
    const wrapper = shallow(<VoteList linkList={mockData.linkList} />);
    expect(wrapper.find('Pagination').length).toBe(1);
  });

})