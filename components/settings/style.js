import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollViewStyle: {
    height: "100%",
    width: "100%",
  },
  mainViewStyle: {
    alignItems: "center",
  },
  imageStyle: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 2,
  },
  // textInputStyle: {
  //   padding: "4%",
  //   width: "100%",
  //   textAlign: "right",
  //   fontFamily: "main",
  //   fontSize: width / 24,
  //   borderWidth: width / 890,
  //   borderRadius: width / 75,
  //   borderColor: Colors.mainColor,
  // },
});

module.exports = styles;
