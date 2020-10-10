import React from "react";
import Colors from "../constants/Colors";
import { View, Text } from "react-native";
import BackArrow from "../components/backArrow";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}>
      <BackArrow navigation={navigation} />
      <Text>Profile Screen</Text>
    </View>
  );
};
export default ProfileScreen;
