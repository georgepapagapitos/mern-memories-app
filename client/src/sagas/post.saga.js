import { takeLatest, put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchAllPosts() {
  try {
    const posts = yield axios.get('/api/v1/posts');
    yield put({ type: 'SET_POSTS', payload: posts.data });
  } catch (error) {
    console.error(error.message);
  }
}

function* createPost(action) {
  try {
    yield axios.post('/api/v1/posts', action.payload);
    yield put({ type: 'FETCH_ALL_POSTS' });
  } catch (error) {
    console.error(error.message);
  }
}

export default function* postsSaga() {
  yield takeLatest('FETCH_ALL_POSTS', fetchAllPosts);
  yield takeLatest('CREATE_POST', createPost);
}