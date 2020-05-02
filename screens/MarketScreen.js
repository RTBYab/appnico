import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import HeaderMarketScreen from "../components/market/marketScreen/header";
import FooterMarketScreen from "../components/market/marketScreen/footer";
import BodyMarketScreen from "../components/market/marketScreen/body";

const MarketScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <HeaderMarketScreen navigation={navigation} />
      <BodyMarketScreen navigation={navigation} />
      <FooterMarketScreen navigation={navigation} />
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
    backgroundColor: Colors.screenBackgroundColor,
  },
});

export default MarketScreen;
