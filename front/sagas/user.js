import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from '../reducer/user'


function signUpAPI(signUpData) {
  console.log(signUpData);
  return axios.post('/user/signup', signUpData);
}

function* signUp(action) {
  try {
    console.log(action.data, 'action.data');
    yield call(signUpAPI, action.data);
    yield put  ({ // put은 dispatch 동일
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}


function logInAPI(LoginData) {
  return axios.post('/user/login', LoginData, {
    withCredentials: true,
  });
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch(e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, logIn)
}


function logOutAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/logout', {}, {
    withCredentials: true,
  });
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({ // put은 dispatch 동일
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    });
  }
}

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
  yield all([
    fork(watchLogOut),
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}