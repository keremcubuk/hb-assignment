import {
  SORT_BY_MOST_VOTED,
  SORT_BY_LESS_VOTED,
  UP_VOTE,
  DOWN_VOTE,
  DELETE_LINK,
  ADD_NEW_LINK,
} from './constants'

export function sortByMostVoted() {
  return {
    type: SORT_BY_MOST_VOTED,
  }
}

export function sortByLessVoted() {
  return {
    type: SORT_BY_LESS_VOTED,
  }
}

export function upVote(itemId) {
  return {
    type: UP_VOTE,
    itemId
  }
}

export function downVote(itemId) {
  return {
    type: DOWN_VOTE,
    itemId
  }
}

export function deleteLink(itemId) {
  return {
    type: DELETE_LINK,
    itemId
  }
}

export function addNewLink(newItem) {
  return {
    type: ADD_NEW_LINK,
    newItem
  }
}