import { combineReducers } from 'redux';
import {GET_POSTS, SET_SORTING } from '../actions';

function makeObj (items) {
  const newObj = {};
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemId = item.id;
    newObj[itemId] = item;
  }
  return newObj;
}

function receivePosts (state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ...action }
    default:
      return state
  }
}

function sorting (state = {}, action) {
  switch (action.type) {
    case SET_SORTING:
      return { ...state, ...action.sortBy }
    default:
      return state
  }
}

export default combineReducers({
  receivePosts,
  sorting
})
