import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../constants/Colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewStyle: {
    width: "100%",
  },
  textInputStyle: {
    width: "100%",
    fontFamily: "main",
    textAlign: "center",
    fontSize: width / 20,
    borderColor: Colors.mainColor,
  },
  hLine: {
    width: "80%",
    marginTop: "2%",
    borderBottomWidth: width / 600,
    borderBottomColor: "black",
  },
});

module.exports = styles;
