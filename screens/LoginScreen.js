import React from "react";
import Login from "../components/auth/login";
import Colors from "../constants/Colors";
import { View } from "react-native";
import BackArrow from "../components/backArrow";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}>
      <BackArrow navigation={navigation} />
      <Login navigation={navigation} />
    </View>
  );
};
export default LoginScreen;
