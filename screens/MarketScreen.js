import React from "react";
import { sreenBackgroundColor } from "../constants/Colors";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import CreateMarket from "../components/market/createMarket";

const MarketScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <Text>MarketScreen</Text>
    </SafeAreaView>
  );
};

MarketScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: sreenBackgroundColor,
  },
});

export default MarketScreen;
