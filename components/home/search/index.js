import React from "react";
import { View, TextInput } from "react-native";
import { textInputStyle, viewStyle } from "./style";

const SearchTextInput = () => {
  return (
    <View style={viewStyle}>
      <TextInput
        multiline={false}
        autoCorrect={false}
        returnKeyType="search"
        style={textInputStyle}
        placeholder="جستجوی خدمت مورد نظر مثلا خیاطی..."
      />
    </View>
  );
};

export default SearchTextInput;
