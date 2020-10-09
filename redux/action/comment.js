import axios from "axios";
import ApiSettings from "../../constants/ApiSettings";
import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT,
} from "./types";

export const createComment = ({
  marketId,
  comment,
  rate,
  navigation,
}) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ comment, rate });
  try {
    const res = await axios.post(
      ApiSettings.URL.Main + `comment/createComment/${marketId}`,
      body,
      config
    );

    dispatch({
      type: CREATE_COMMENT,
      payload: res.data,
    });

    navigation.goBack();
  } catch (err) {
    console.log(err);
  }
};

export const getComment = (marketId) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      ApiSettings.URL.Main + `comment/getComment/${marketId}`,
      config
    );
    dispatch({
      type: GET_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
