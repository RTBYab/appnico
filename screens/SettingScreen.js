import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import Settings from "../components/settings";
import BackArrow from "../components/backArrow";

const SettingScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: Colors.screenBackgroundColor }}>
      <BackArrow navigation={navigation} />
      <Settings navigation={navigation} />
    </View>
  );
};

export default SettingScreen;
