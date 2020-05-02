import React from "react";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { View, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const BackArrow = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons
          name="ios-arrow-round-back"
          style={styles.ionIconsStyle}
          size={width / 8}
          color={Colors.mainColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackArrow;
