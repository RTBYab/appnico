import { StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "flex-end",
    backgroundColor: Colors.mainColor,
    padding: "4%",
  },
});

module.exports = styles;
