import React from "react";
import Map from '../components/map'
import { View } from "react-native";
import BackArrow from "../components/backArrow";

const MapScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <BackArrow navigation={navigation} />
      <Map show={true} scrollEnabled={false} />
    </View>
  );
};


export default MapScreen;