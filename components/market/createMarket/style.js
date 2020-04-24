import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/Colors";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.screenBackgroundColor,
  },
  imageStyle: {
    width: "80%",
    height: "40%",
  },
  textStyle: {
    fontSize: width / 25,
    fontFamily: "main2",
    textAlign: "right",
    color: colors.mainTextColor,
  },
  TouchableOpacityStyle: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  buttonViewStyle: {
    padding: "3%",
    borderRadius: width / 85,
    backgroundColor: colors.mainColor,
  },
});

module.exports = styles;
