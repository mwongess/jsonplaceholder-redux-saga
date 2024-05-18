// src/reducers/index.js
import { combineReducers } from 'redux';
import postsReducer from './postsReducers';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
