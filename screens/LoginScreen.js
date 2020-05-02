import React from "react";
import Login from "../components/login";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native";
import BackArrow from "../components/backArrow";
const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}
    >
      <BackArrow navigation={navigation} />
      <Login navigation={navigation} />
    </SafeAreaView>
  );
};
export default LoginScreen;
