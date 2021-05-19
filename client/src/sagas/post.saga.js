import { takeLatest, put } from '@redux-saga/core/effects';
import axios from 'axios';

const baseUrl = '/api/v1/posts';

function* fetchAllPosts() {
  try {
    const posts = yield axios.get(baseUrl);
    yield put({ type: 'SET_POSTS', payload: posts.data });
  } catch (error) {
    console.error(error);
  }
}

function* createPost(action) {
  try {
    yield axios.post(baseUrl, action.payload);
    yield put({ type: 'FETCH_ALL_POSTS' });
  } catch (error) {
    console.error(error);
  }
}

function* updatePost(action) {
  try {
    yield axios.patch(`${baseUrl}/${action.payload.currentId}`, action.payload.postData);
    yield put({ type: 'FETCH_ALL_POSTS' });
  } catch (error) {
    console.error(error);
  }
}

function* deletePost(action) {
  try {
    yield axios.delete(`${baseUrl}/${action.payload.id}`);
    yield put({ type: 'FETCH_ALL_POSTS' });
  } catch (error) {
    console.error(error);
  }
}

function* likePost(action) {
  try {
    yield axios.patch(`${baseUrl}/${action.payload.id}/like`);
    yield put({ type: 'FETCH_ALL_POSTS' });
  } catch (error) {
    console.error(error);
  }
}

export default function* postsSaga() {
  yield takeLatest('FETCH_ALL_POSTS', fetchAllPosts);
  yield takeLatest('CREATE_POST', createPost);
  yield takeLatest('UPDATE_POST', updatePost);
  yield takeLatest('DELETE_POST', deletePost);
  yield takeLatest('LIKE_POST', likePost);
}