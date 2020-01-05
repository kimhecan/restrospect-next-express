export const inintialState = {
  user: {
    nick: null,
    userId: null,
    password: null
  },
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


export default (state = inintialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST: {
      return {
        ...state,
      }
    }
    case SIGN_UP_SUCCESS: {
      alert('회원가입에 성공하셨습니다.')
      return {
        ...state,
      }
    }
    case SIGN_UP_FAILURE: {
      alert("회원가입에 실패하였습니다.")
      return {
        ...state,
      }
    }
    case LOG_IN_REQUEST: {
      return {
        ...state,
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        user: action.data,
      }
    }
    case LOG_IN_FAILURE: {
      alert("로그인에 실패했습니다. ID와 비밀번호를 확인해주세요.")
      return {
        ...state,
      }
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
      }
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        user: {
          nick: null,
          userId: null,
          password: null,
        }
      }
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state,
      }
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        user: action.data
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}