import produce from 'immer';

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

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILRUE = 'DELETE_POST_FAILRUE';




export default (state = initalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST: {
        draft.mainPosts = action.lastId == 0 ? [] : draft.mainPosts
        break;
      }
      case ADD_POST_REQUEST: {
        break;
      }
      case DELETE_POST_REQUEST: {
        break;
      }
      case LOAD_POST_SUCCESS: {
        draft.mainPosts = draft.mainPosts.concat(action.data);
        break;
      }
      case ADD_POST_SUCCESS: {
        draft.mainPosts.unshift(action.data);
        break;
      }
      case DELETE_POST_SUCCESS: {
        const index = draft.mainPosts.findIndex( v => v.id == action.data)
        draft.mainPosts.splice(index, 1);
        break;
      }
      default: {
        break;
      }
    }
  })
}