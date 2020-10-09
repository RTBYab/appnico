import axios from "axios";
// import setAuthToken from "../../helper/setAuthToken";
import ApiSettings from "../../constants/ApiSettings";
import {
  LOGOUT,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  CLEAR_PROFILE,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from "./types";
import { Alert } from "react-native";

// Load User
export const loadUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(ApiSettings.URL.Main + `user/cuser/${id}`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Registre User
export const registerByPhone = ({ mobileNumber, navigation }) => async (
  dispatch
) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ mobileNumber });

  try {
    const res = await axios.post(
      ApiSettings.URL.Main + "user/signupByPhoneNumber",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    navigation.navigate("VerificationScreen", { data: mobileNumber });
    
  } catch (err) {
    const errorMessage = err.response.data.msg;

    Alert.alert("خطا...", errorMessage);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login by Phone Number
export const loginByPhone = ({ mobileNumber, navigation }) => async (
  dispatch
) => {
  const config = {
    headers: {
      accept: "appication/json",
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ mobileNumber });
  try {
    await axios.post(
      ApiSettings.URL.Main + "user/signinByMobilePhone",
      body,
      config
    );

    navigation.navigate("VerificationScreen", { data: mobileNumber });

  } catch (err) {
    const errorMessage = err.response.data.msg;
    Alert.alert("خطا...", errorMessage);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Verification
export const verfication = ({ code, navigation, mobileNumber }) => async (
  dispatch
) => {
  const config = {
    headers: {
      accept: "appication/json",
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ code, mobileNumber });

  try {
    const res = await axios.post(
      ApiSettings.URL.Main + "user/validateCode",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    // const { user } = res.data;
    // dispatch(loadUser(user._id));
    navigation.replace("MarketScreen");
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
