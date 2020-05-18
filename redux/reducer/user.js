import {
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  ACCOUNT_DELETED,
  REGISTER_SUCCESS,
} from "../action/types";
import { AsyncStorage } from "react-native";

const initialState = {
  id: null,
  user: null,
  token: null,
  loading: true,
  isReviewer: false,
  isMarketOwner: false,
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        id: payload.id,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: payload.id,
        loading: false,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        isReviewer: payload.isReviewer,
        isMarketOwner: payload.isMarketOwner,
      };
    default:
      return state;
  }
}
