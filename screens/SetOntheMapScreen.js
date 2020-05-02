import React from "react";
import { View, Text } from "react-native";
import BackArrow from "../components/backArrow";

const SetOntheMapScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "violet" }}>
      <BackArrow navigation={navigation} />
      <Text>SetOntheMapScreen</Text>
    </View>
  );
};
export default SetOntheMapScreen;
