import axios from "axios";
import ApiSettings from "../../constants/ApiSettings";
import {
  CREATE_MARKET,
  UPDATE_MARKET,
  UPDATE_MARKET_DETAILS,
  GET_MARKET_BY_OWNER_ID,
  GET_MARKET_PROFILE_PHOTO,
} from "./types";

export const createMarket = ({ id, marketData, navigation }) => async (
  dispatch
) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(marketData);

  try {
    const res = await axios.post(
      ApiSettings.URL.Main + `store/createstore/${id}`,
      body,
      config
    );
    dispatch({
      type: CREATE_MARKET,
      payload: res.data,
    });
    console.log("createMarketDispatch", dispatch);
    navigation.navigate("Store");
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export const getStoreByStoreOwner = (id, token) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(
      ApiSettings.URL.Main + `/store/storeOwner/${id}`,
      config
    );

    dispatch({
      type: GET_MARKET_BY_OWNER_ID,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateStore = ({ id, token, storeData, navigation }) => async (
  dispatch
) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(storeData);

  try {
    const res = await axios.put(
      ApiSettings.URL.Main + `store/updatestore/${id}`,
      body,
      config
    );
    dispatch({
      type: UPDATE_MARKET,
      payload: res.data,
    });
    navigation.goBack();
  } catch (e) {
    console.log(e.message);
    alert(e.message);
  }
};

export const updateStoreDetails = ({
  id,
  token,
  storeData,
  navigation,
}) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(storeData);

  try {
    const res = await axios.put(
      ApiSettings.URL.Main + `store/updatedetails/${id}`,
      body,
      config
    );
    dispatch({
      type: UPDATE_MARKET_DETAILS,
      payload: res.data,
    });
    navigation.goBack();
  } catch (e) {
    console.log(e.message);
    alert(e.message);
  }
};

export const uploadStoreImage = ({ id, token, photo }) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const fileName = photo.split("/").pop();

  let bodyFormData = new FormData();
  // bodyFormData.set(newPath, fileName);
  bodyFormData.append("photo", {
    uri: photo,
    name: fileName,
  });
  try {
    const res = await axios.post(
      ApiSettings.URL.Main + `store/updatephoto/${id}`,
      bodyFormData,
      config
    );
    dispatch({
      type: UPDATE_MARKET_DETAILS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.message);
    alert(e.message);
  }
};

export const getStoreProfilePhoto = ({ id, photoId }) => async (dispatch) => {
  config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(
      ApiSettings.URL.Main + `store/storeprofilePhoto/${id}/${photoId}`
    );
    dispatch({
      type: GET_MARKET_PROFILE_PHOTO,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
