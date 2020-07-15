import produce, { enableES5 } from 'immer';
import {
  SORT_BY_MOST_VOTED,
  SORT_BY_LESS_VOTED,
  UP_VOTE,
  DOWN_VOTE,
  DELETE_LINK,
  ADD_NEW_LINK,
} from './constants';
import * as data from '../data/data.json';
import { sortList, getCurrentDate } from '../utils';

enableES5(); // For EcmaScript support

const savedLinks = localStorage.getItem('linkList');

export const initialState = {
  linkList: JSON.parse(savedLinks) ? JSON.parse(savedLinks) : data.linkList,
  sort: 'ASC'
};

const voteReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SORT_BY_MOST_VOTED:
        draft.sort = 'ASC';
        draft.linkList = sortList(state.linkList, draft.sort);
        break;
      case SORT_BY_LESS_VOTED:
        draft.sort = 'DESC';
        draft.linkList = sortList(state.linkList, draft.sort);
        break;
      case UP_VOTE:
        let getList = [...state.linkList];
        const upvotedList = getList.map(i => ({
            ...i,
            point: action.itemId === i.id ? i.point + 1 : i.point,
            updateDate: action.itemId === i.id ? getCurrentDate() : i.updateDate
          }));
        draft.linkList = sortList(upvotedList, draft.sort);
        localStorage.setItem('linkList', JSON.stringify(draft.linkList));
        break;
      case DOWN_VOTE:
        let currentList = [...state.linkList];
        const downVotedList = currentList.map(i => ({
            ...i,
            point: action.itemId === i.id ? i.point - 1 : i.point,
            updateDate: action.itemId === i.id ? getCurrentDate() : i.updateDate
          }));
        draft.linkList = sortList(downVotedList, draft.sort);
        localStorage.setItem('linkList', JSON.stringify(draft.linkList));
        break;
      case DELETE_LINK:
        draft.linkList = state.linkList.filter((item, index) => {
          return item.id !== action.itemId;
        });
        localStorage.setItem('linkList', JSON.stringify(draft.linkList));
        break;
      case ADD_NEW_LINK:
        const newLinkData = {
          id: getCurrentDate(),
          name: action.newItem.linkName,
          url: action.newItem.linkURL,
          point: 0,
          updateDate: getCurrentDate()
        };
        try {
          const linkList = [...state.linkList];
          linkList.unshift(newLinkData);
          draft.linkList = linkList;
          localStorage.setItem('linkList', JSON.stringify(draft.linkList));
        } catch (error) {
          console.log('ADD_NEW_LINK exception: ', error)
        }
        break;
      default:
        return state;
    }
  });

export const selectVoteList = state => state.voteReducer.linkList;

export default voteReducer;