import * as PostAPIUtil from '../utils/post_api';

export const GET_POSTS = 'GET_POSTS';
export const SET_SORTING = 'SET_SORTING';

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const sorting = sortBy => ({
  type: SET_SORTING,
  sortBy
});

export const fetchPosts = () => dispatch =>
  PostAPIUtil.fetchPosts()
  .then(posts => dispatch(getPosts(posts)))

// export const fetchCategories = () => dispatch =>
//   CategoryAPIUtil.fetchCategories().then(categories =>
//     dispatch(receiveCategories(categories))
//   )
