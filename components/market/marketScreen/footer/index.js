import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  viewStyle,
  textStyle,
  bottonStyle,
  horizontalView,
  commentTextStyle,
  bottomViewStyle,
} from "./style";

const FooterMarketScreen = ({ navigation }) => {
  const mapOnPress = () => navigation.push("MapScreen");
  const commentOnPress = () => navigation.push("CreateComment");

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={mapOnPress}>
        <Text style={textStyle}>آدرس:خیابان وحدت شمالی</Text>
      </TouchableOpacity>

      <View style={horizontalView}>
        <TouchableOpacity style={bottonStyle} onPress={commentOnPress}>
          <View style={bottomViewStyle}>
            <Text style={commentTextStyle}>ثبت نظر</Text>
          </View>
        </TouchableOpacity>

        <Text style={textStyle}>تلفن:۶۶۵۵۷۸۳۲</Text>
      </View>
    </View>
  );
};

export default FooterMarketScreen;
