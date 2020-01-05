import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS } from '../reducer/post';


function addPostAPI(postData) {
  return axios.post('/post/', postData, {
    withCredentials: true,
  });
}

function * addPost(action) {
  try {
    const result = yield call(addPostAPI, action);
    console.log(result.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_POST_FAILURE,
      error: e
    });
  }
}

function* watchAddPost() {
  yield takeEvery(ADD_POST_REQUEST, addPost);
}


function loadPostAPI() {
  return axios.get(`/post/`, {
    withCredentials: true,
  })
}


function* loadPost() {
  try {
    const result = yield call(loadPostAPI);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data
    })
  } catch (error) {
    
  }
}

function* watchLoadPost() {
  yield takeEvery(LOAD_POST_REQUEST, loadPost);
}


export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPost),
  ])
}