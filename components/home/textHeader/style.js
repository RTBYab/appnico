import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewStyle: {
    top: "12%",
    alignItems: "center",
    position: "absolute",
  },
  mainTextStyle: {
    fontFamily: "main2",
    fontSize: width / 14,
    marginBottom: "3%",
  },
  subTextStyle: { fontFamily: "main", fontSize: width / 25 },
});

module.exports = styles;
