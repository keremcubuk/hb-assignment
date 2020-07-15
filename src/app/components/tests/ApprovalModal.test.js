import React from 'react'
import { shallow } from 'enzyme'
import ApprovalModal from '../ApprovalModal';

describe('ApprovalModal Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<ApprovalModal data={{}} />);
    expect(wrapper.find('Modal').length).toBe(1);
  })
})