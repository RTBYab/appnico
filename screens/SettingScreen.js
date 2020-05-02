import React from "react";
import { View, Text } from "react-native";
import BackArrow from "../components/backArrow";

const SettingScreen = ({ navigation }) => {
  return (
    <View>
      <BackArrow navigation={navigation} />
      <Text>Setting Screen</Text>
    </View>
  );
};

export default SettingScreen;
