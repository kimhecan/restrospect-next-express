import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducer/user'


function signUpAPI(signUpData) {
  console.log(signUpData);
  return axios.post('/user/', signUpData);
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

export default function* userSaga() {
  yield all([
    //fork(watchLogin),
    fork(watchSignUp),
  ]);
}