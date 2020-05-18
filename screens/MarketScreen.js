import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import { View, StyleSheet } from "react-native";
import MarketComponentsBundler from "../components/market/marketScreen/bundler";

const MarketScreen = ({ navigation }) => {
  return (
    <View style={styles.safeAreaViewStyle}>
      <MarketComponentsBundler navigation={navigation} />
    </View>
  );
};

MarketScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: Colors.screenBackgroundColor,
  },
});

export default MarketScreen;
