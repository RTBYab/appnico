import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const FooterMarketScreen = ({ navigation }) => {
  const mapOnPress = () => navigation.push("SetOntheMapScreen");
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={() => mapOnPress()}>
        <Text style={{ color: "#fff" }}>آدرس:خیابان وحدت شمالی</Text>
      </TouchableOpacity>
      <Text style={{ color: "#fff" }}>تلفن:۶۶۵۵۷۸۳۲</Text>
    </View>
  );
};

export default FooterMarketScreen;
