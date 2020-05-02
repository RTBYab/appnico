import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { textStyle, viewStyle, touchableOpacityStyle } from "./style";

const SearchButton = () => {
  return (
    <View style={viewStyle}>
      <TouchableOpacity style={touchableOpacityStyle}>
        <Text style={textStyle}>جستجو</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchButton;
