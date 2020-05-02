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
  user: null,
  loading: true,
  isReviewer: false,
  isMarketOwner: false,
  isAuthenticated: false,
  token: AsyncStorage.getItem("token"),
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
    default:
      return state;
  }
}
