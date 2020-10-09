import React from "react";
import Colors from "../constants/Colors";
import { View, StyleSheet } from "react-native";
import BodyMarketScreen from "../components/market/marketScreen/body";
import FooterMarketScreen from "../components/market/marketScreen/footer";
import HeaderMarketScreen from "../components/market/marketScreen/header";

const MarketScreen = ({ navigation }) => {
  return (
    <View style={styles.safeAreaViewStyle}>
      <HeaderMarketScreen navigation={navigation} />
      <BodyMarketScreen navigation={navigation} />
      <FooterMarketScreen navigation={navigation} />
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
