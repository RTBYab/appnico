import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import BackArrow from "../components/backArrow";
import CommentList from "../components/market/commentList";

const CommentListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}>
      <BackArrow navigation={navigation} />
      <CommentList navigation={navigation} />
    </View>
  );
};
export default CommentListScreen;
