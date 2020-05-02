import React from "react";
import { View, Text } from "react-native";
import { viewStyle, mainTextStyle, subTextStyle } from "./style";
const TextHeader = () => {
  return (
    <View style={viewStyle}>
      <Text style={mainTextStyle}>آپ نیکو</Text>
      <Text style={subTextStyle}>بهترین کالا و خدمات در اطراف شما</Text>
    </View>
  );
};

export default TextHeader;
