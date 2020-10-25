import React from "react";
import { viewStyle, ionIconsStyle } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { View, Dimensions, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");

const BackArrow = ({ navigation }) => {
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons
          name="ios-arrow-round-back"
          style={ionIconsStyle}
          size={width / 8}
          color={Colors.mainColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackArrow;
