import {
  CREATE_MARKET,
  UPDATE_MARKET,
  UPDATE_MARKET_DETAILS,
  GET_MARKET_BY_OWNER_ID,
  GET_MARKET_PROFILE_PHOTO,
} from "../action/types";

const initialState = {
  market: [],
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_MARKET:
      return {
        ...state,
        market: payload,
        loading: false,
      };
    default:
      return state;
  }
}
