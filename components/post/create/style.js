import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/Colors";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  imageStyle: {
    width: "80%",
    height: "40%",
  },
  textStyle: {
    textAlign: "center",
    fontSize: width / 30,
    fontFamily: "main",
    color: "#000",
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
  submitButton: {
    width: "50%",
    alignSelf: "center",
    padding: "3%",
    marginTop: "3%",
    backgroundColor: "purple",
  },
});

module.exports = styles;
