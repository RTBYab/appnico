import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import BackArrow from "../components/backArrow";
import CreateComment from "../components/comment/create";

const CreateCommentScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}>
      <BackArrow navigation={navigation} />
      <CreateComment navigation={navigation} />
    </View>
  );
};
export default CreateCommentScreen;
