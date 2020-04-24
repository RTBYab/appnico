import React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";

const CreateMarket = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Image
        source={require("../../../assets/images/market.png")}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          navigation.push("MarketScreen");
        }}
      >
        <View style={styles.buttonViewStyle}>
          <Text style={styles.textStyle}>ساخت فروشگاه</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateMarket;
