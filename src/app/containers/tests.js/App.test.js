import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import App from '../App';
import VoteList from '../VoteList';
import * as mockData from '../../data/data.json'

jest.mock(`react-redux`, () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
  });

  test('Router Test', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App linkList={mockData.linkList} />
      </MemoryRouter>
    );
    expect(wrapper.find(VoteList)).toHaveLength(1);
  });
})