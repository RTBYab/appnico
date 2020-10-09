import {
  DELETE_POST,
  UPDATE_POST,
  CREATE_POST,
  GET_MARKET_POSTS,
} from "../action/types.js";

const initialState = {
  posts: [],
  post: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };
    case GET_MARKET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    default:
      return state;
  }
}
