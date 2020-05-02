import Colors from "../../constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    width: "80%",
    padding: "4%",
    textAlign: "right",
    fontFamily: "main",
    fontSize: width / 24,
    borderWidth: width / 890,
    borderRadius: width / 75,
    borderColor: Colors.mainColor,
  },
});

module.exports = styles;
