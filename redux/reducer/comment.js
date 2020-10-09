import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENT } from "../action/types";

const initialState = {
  comments: [],
  comment: null,
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: payload,
        loading: false,
      };
    case GET_COMMENT:
      console.log("popopo", payload);

      return {
        ...state,
        comments: payload,
        loading: false,
      };
    default:
      return state;
  }
}
