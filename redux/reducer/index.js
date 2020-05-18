import { combineReducers } from "redux";
// import alert from "./alert";
// import auth from "./auth";
// import profile from "./profile";
import post from "./post";
import user from "./user";
import market from "./market";

export default combineReducers({
  user,
  post,
  market,
});
