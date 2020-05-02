import React from "react";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import BackArrow from "../components/backArrow";
import { View, Dimensions, TouchableOpacity, Image } from "react-native";

const { width } = Dimensions.get("window");

const ImageDetailScreen = ({ navigation }) => {
  const trashOnPress = () => console.warn("Trash Icon Pressd...!");
  const editOnPress = () => console.warn("Edit Icon Pressd...!");
  return (
    <View style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}>
      <BackArrow navigation={navigation} />
      <View
        style={{ alignItems: "center", marginTop: "25%", marginBottom: "3%" }}
      >
        <Image source={require("../assets/images/icon.png")} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => trashOnPress()}>
          <Ionicons
            name="ios-trash"
            size={width / 15}
            color={Colors.mainColor}
            style={{ margin: "5%" }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => editOnPress()}>
          <Ionicons
            name="md-create"
            size={width / 15}
            color={Colors.mainColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageDetailScreen;
