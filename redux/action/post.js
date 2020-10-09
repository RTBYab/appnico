import axios from "axios";
import { Alert } from "react-native";
import ApiSettings from "../../constants/ApiSettings";
import {
  DELETE_POST,
  UPDATE_POST,
  CREATE_POST,
  GET_MARKET_POSTS,
} from "./types";

export const createPost = ({ id, photo, navigation }) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  let bodyFormData = new FormData();
  const fileName = photo.split("/").pop();

  bodyFormData.append("photo", {
    uri: photo,
    name: fileName,
  });

  try {
    const res = await axios.post(
      ApiSettings.URL.Main + `post/new/${id}`,
      bodyFormData,
      config
    );

    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });
    navigation.goBack();
  } catch (err) {
    const errorMessage = err.response.data.msg;
    console.log("err", err.response.data);
  }
};

export const getMarketPosts = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      ApiSettings.URL.Main + `post/posts/${id}`,
      config
    );

    dispatch({
      type: GET_MARKET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    const errorMessage = err.response.data.msg;
    Alert.alert("خطا...", errorMessage);
  }
};

export const deletePost = (id, navigation) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.delete(ApiSettings.URL.Main + `post/${id}`, config);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    navigation.goBack();
  } catch (err) {
    const errorMessage = err.response.data.msg;
    Alert.alert("خطا...", errorMessage);
  }
};

export const updatePost = ({
  _id,
  rTitle,
  rPhoto,
  rBody,
  userId,
  navigation,
}) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  const fileName = rPhoto.split("/").pop();

  let bodyFormData = new FormData();
  // bodyFormData.append("rPhoto", {
  //   uri: rPhoto,
  //   name: fileName,
  // });

  bodyFormData.append("title", rTitle);
  bodyFormData.append("body", rBody);

  try {
    const res = await axios.put(
      ApiSettings.URL.Main + `post/${_id}/${userId}`,
      bodyFormData,
      config
    );

    dispatch({
      type: UPDATE_POST,
      payload: res.data,
    });
    navigation.push("MarketScreen");
  } catch (err) {
    const errorMessage = err.response.data;
    // Alert.alert("خطا...", errorMessage);
    console.log(errorMessage);
  }
};
