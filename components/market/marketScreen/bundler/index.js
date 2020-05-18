import React from "react";
import { View } from "react-native";
import { viewStyle } from "./style";
import BodyMarketScreen from "../body";
import FooterMarketScreen from "../footer";
import HeaderMarketScreen from "../header";

const MarketComponentsBundler = ({ navigation }) => {
  return (
    <View style={viewStyle}>
      <HeaderMarketScreen navigation={navigation} />
      <BodyMarketScreen navigation={navigation} />
      <FooterMarketScreen navigation={navigation} />
    </View>
  );
};

export default MarketComponentsBundler;
