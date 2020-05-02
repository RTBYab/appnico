import Colors from "../../../constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewStyle: {
    width: width / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginTop: "15%",
    padding: "8%",
    width: "100%",
    fontFamily: "main",
    textAlign: "center",
    fontSize: width / 22,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  touchableOpacityStyle: { width: "120%", borderRadius: width / 75 },
});

module.exports = styles;
