import axios from "axios";
import { AsyncStorage } from "react-native";

const setAuthToken = async (token) => {
  try {
    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
      await AsyncStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
      await AsyncStorage.removeItem("token");
    }
  } catch (error) {
    console.log("tokenError: ", error);
  }
};

export default setAuthToken;
