import { all, fork, put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, DELETE_POST_SUCCESS, DELETE_POST_REQUEST, DELETE_POST_FAILRUE, LOAD_POST_FAILURE } from '../reducer/post';


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


function loadPostAPI(lastId = 0, limit = 5) {
  return axios.get(`/post/?lastId=${lastId}&limit=${limit}`, {
    withCredentials: true,
  })
}


function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.lastId);
    console.log(result.data, 'result.data');
    
    console.log(result.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data
    })
  } catch (e) {
    yield put({
      type: LOAD_POST_FAILURE
    })
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function deletePostAPI(postId) {
  console.log(postId, 'postId');
  
  return axios.delete(`/post/${postId}`, {
    withCredentials: true,
  });
}

function* deletePost(action) {
  try {
    const result = yield call(deletePostAPI, action.data);
    yield put({
      type: DELETE_POST_SUCCESS,
      data: result.data
    })
  } catch (e) {
    yield put({
      type: DELETE_POST_FAILRUE,
      error: e,
    })
    console.error(e);
    
  }
}

function* watchDeletePost() {
  yield takeEvery(DELETE_POST_REQUEST, deletePost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPost),
    fork(watchDeletePost),
  ])
}