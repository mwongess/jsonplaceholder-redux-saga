// src/sagas/postsSaga.js
import { all } from 'redux-saga/effects';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Fetch posts
function* fetchPosts() {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
        yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
    }
}

// Create post
function* createPost(action) {
    try {
        const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', action.payload);
        yield put({ type: 'CREATE_POST_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'CREATE_POST_FAILURE', payload: error.message });
    }
}

// Update post
function* updatePost(action) {
    try {
        const response = yield call(axios.put, `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`, action.payload);
        yield put({ type: 'UPDATE_POST_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'UPDATE_POST_FAILURE', payload: error.message });
    }
}

// Delete post
function* deletePost(action) {
    try {
        yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${action.payload}`);
        yield put({ type: 'DELETE_POST_SUCCESS', payload: action.payload });
    } catch (error) {
        yield put({ type: 'DELETE_POST_FAILURE', payload: error.message });
    }
}

// Watcher sagas
function* watchFetchPosts() {
    yield takeEvery('FETCH_POSTS_REQUEST', fetchPosts);
}

function* watchCreatePost() {
    yield takeEvery('CREATE_POST_REQUEST', createPost);
}

function* watchUpdatePost() {
    yield takeEvery('UPDATE_POST_REQUEST', updatePost);
}

function* watchDeletePost() {
    yield takeEvery('DELETE_POST_REQUEST', deletePost);
}

export default function* rootSaga() {
    yield all([
        watchFetchPosts(),
        watchCreatePost(),
        watchUpdatePost(),
        watchDeletePost(),
    ]);
}
