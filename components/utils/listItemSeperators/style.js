import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/Colors";

// const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewStyle: {
    width: "80%",
    marginVertical: "0.1%",
    height: 1,
    backgroundColor: colors.seperator,
  },
});

module.exports = styles;
