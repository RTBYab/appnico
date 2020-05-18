import {
  GET_POSTS,
  DELETE_POST,
  UPDATE_POST,
  CREATE_POST,
} from "../action/types.js";

const initialState = {
  post: null,
  posts: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case CREATE_POST:
      return {
        ...state,
        post: payload,
      };
    case DELETE_POST:
      return state.filter((post) => post.id !== payload);
    default:
      return state;
  }
}
