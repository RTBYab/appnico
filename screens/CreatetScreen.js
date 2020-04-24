import React from "react";
import { sreenBackgroundColor } from "../constants/Colors";
import { SafeAreaView, StyleSheet } from "react-native";
import CreateMarket from "../components/market/createMarket";

const CreateScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <CreateMarket navigation={navigation} />
    </SafeAreaView>
  );
};

CreateMarket.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: sreenBackgroundColor,
  },
});

export default CreateScreen;
