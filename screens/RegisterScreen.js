import React from "react";
import Register from "../components/auth/register";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native";
import BackArrow from "../components/backArrow";
const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}
    >
      <BackArrow navigation={navigation} />
      <Register navigation={navigation} />
    </SafeAreaView>
  );
};
export default RegisterScreen;
