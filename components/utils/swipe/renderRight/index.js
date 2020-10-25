import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { viewStyle, trashStyle, editStyle } from "./style";
import Colors from "../../../../constants/Colors";

export default function RenderRightActions() {
  return (
    <View style={viewStyle}>
      <View style={trashStyle}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color={Colors.screenBackgroundColor}
        />
      </View>
      <View style={editStyle}>
        <MaterialIcons
          name="edit"
          size={24}
          color={Colors.screenBackgroundColor}
        />
      </View>
    </View>
  );
}
