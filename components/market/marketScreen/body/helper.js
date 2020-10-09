import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";
import { View, TouchableWithoutFeedback, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Helper = ({ navigation }) => {
  return (
    <View
      style={{
        right: "5%",
        bottom: "20%",
        position: "absolute",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("CreatePost")}
      >
        <Ionicons
          name="ios-add-circle-outline"
          // style={styles.ionIconsStyle}
          size={width / 12}
          color={Colors.mainColor}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Helper;
