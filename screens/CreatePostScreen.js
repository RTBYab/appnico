import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import BackArrow from "../components/backArrow";
import CreatePost from "../components/post/create";

const CreatePostScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}>
      <BackArrow navigation={navigation} />
      <CreatePost navigation={navigation} />
    </View>
  );
};
export default CreatePostScreen;
