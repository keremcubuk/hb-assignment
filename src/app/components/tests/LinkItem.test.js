import React from 'react'
import { shallow } from 'enzyme'
import LinkItem from '../LinkItem';
import { useDispatch } from 'react-redux';

jest.mock(`react-redux`, () => ({
  useDispatch: jest.fn()
}));

describe('LinkItem Component', () => {
  beforeEach(() => {
    useDispatch.mockClear();
  });

  const dummyData = {
    name: "Test",
    url: "http://test.com",
    point: 0
  }

  test('Renders Row Elements', () => {
    const wrapper = shallow(<LinkItem item={dummyData} />);
    expect(wrapper.find('Row').length).toBe(2);
  });

  test('Renders ToastContainer', () => {
    const wrapper = shallow(<LinkItem item={dummyData} />);
    expect(wrapper.find('ToastContainer').length).toBe(1);
  });

  test('Renders Modal', () => {
    const wrapper = shallow(<LinkItem item={dummyData} />);
    expect(wrapper.find('ApprovalModal').length).toBe(1);
  });

  test('Renders Button on MouseEnter', () => {
    const wrapper = shallow(<LinkItem item={dummyData} />);
    wrapper.simulate("mouseEnter");
    expect(wrapper.find('Button').length).toBe(1);
  });

  test('Renders Button on MouseLeave', () => {
    const wrapper = shallow(<LinkItem item={dummyData} />);
    wrapper.simulate("mouseLeave");
    expect(wrapper.find('Button').length).toBe(0);
  });
})