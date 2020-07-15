import voteReducer from '../reducer';
import {
  SORT_BY_MOST_VOTED,
  SORT_BY_LESS_VOTED,
} from '../constants';
import * as mockData from '../../data/data.json';
import { sortList } from '../../utils';

describe('Vote Reducer', () => {
  let initialState = {
    linkList: mockData.linkList,
    sort: 'ASC'
  }

  test('should return default state', () => {
    const newState = voteReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test('SORT_BY_MOST_VOTED', () => {
    const { linkList } = mockData;
    const newState = voteReducer(undefined, {
      type: SORT_BY_MOST_VOTED,
    });
    expect(newState).toEqual({ sort: 'ASC', linkList: sortList(linkList, 'ASC') })
  });

  test('SORT_BY_LESS_VOTED', () => {
    const { linkList } = mockData;
    const newState = voteReducer(undefined, {
      type: SORT_BY_LESS_VOTED,
    });
    expect(newState).toEqual({ sort: 'DESC', linkList: sortList(linkList, 'DESC') })
  });

});
