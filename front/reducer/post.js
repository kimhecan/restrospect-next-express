export const initalState = {
  mainPosts: [], // 화면에 보일 포스트들
}

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';


export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';


export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';


export default (state = initalState, action) => {
  switch (action.type) {
    case LOAD_POST_REQUEST: {
      return {
        ...state,
      }
    }
    case LOAD_POST_SUCCESS: {
      return {
        ...state,
        mainPosts: action.data,
      }
    }
    case ADD_POST_REQUEST: {
      return {
        ...state,
      }
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}