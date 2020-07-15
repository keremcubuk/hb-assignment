import React from 'react'
import { shallow } from 'enzyme'
import AddVote from '../AddVote';
import { useDispatch } from 'react-redux';

jest.mock(`react-redux`, () => ({
  useDispatch: jest.fn(),
  dispatch: jest.fn()
}));

describe('AddVote Component', () => {
  beforeEach(() => {
    useDispatch.mockClear();
  });

  test('Renders Row Elements', () => {
    const wrapper = shallow(<AddVote />);
    expect(wrapper.find('Row').length).toBe(1);
  });

  test('Check Button element', () => {
    const wrapper = shallow(<AddVote />);
    expect(wrapper.find('Button').text()).toEqual('ADD');
  });

  // test('Form Submit', () => {
  //   const wrapper = shallow(<AddVote />);
  //   wrapper.find('Form').simulate('submit');
  // });
})