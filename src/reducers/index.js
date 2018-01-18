import { combineReducers } from 'redux';
import {GET_POSTS, SET_SORTING } from '../actions';

const makeObj = (items) => (
  items.reduce((newObj, item) => {
    const itemId = item.id;
    newObj[itemId] = item;
    return newObj;
  }, {})
);

function receivePosts (state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        ...makeObj(action.posts)
      }
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
