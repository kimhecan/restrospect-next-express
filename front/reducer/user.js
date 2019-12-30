export const inintialState = {
  user: {
    nick: null,
    id: null,
    password: null
    
  }
};

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
export const LOG_OUT = 'LOG_OUT';

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};

export default (state = inintialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        user: action.data,
      }
    }
    case SIGN_UP: {
      return {
        ...state,
        user: action.data,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}