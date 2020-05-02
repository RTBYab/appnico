import React from "react";
import { View } from "react-native";
import { imageProfileStyle, viewStyle } from "./style";
import { Text, Image, TouchableOpacity } from "react-native";

const HeaderMarketScreen = ({ navigation }) => {
  // For Modal Section [isVisible]

  // ImageProfileModal Function
  const onPresstoggleDrawer = () => navigation.toggleDrawer();

  return (
    <View style={viewStyle}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Rate</Text>
        <Text>4.5</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Followers</Text>
        <Text>5</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Comments</Text>
        <Text>10</Text>
      </View>
      <TouchableOpacity onPress={() => onPresstoggleDrawer()}>
        <Image
          source={require("../../../../assets/images/robot-dev.png")}
          resizeMode="cover"
          style={imageProfileStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMarketScreen;
