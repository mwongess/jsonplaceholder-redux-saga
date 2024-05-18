// src/sagas/index.js
import { all } from 'redux-saga/effects';
import watchFetchPosts from './postsSaga';
import watchCreatePost from './postsSaga';
import watchUpdatePost from './postsSaga';
import watchDeletePost from './postsSaga';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchCreatePost(),
    watchUpdatePost(),
    watchDeletePost(),
  ]);
}
