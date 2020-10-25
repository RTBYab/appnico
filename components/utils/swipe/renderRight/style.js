import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../../constants/Colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
  },
  trashStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    backgroundColor: Colors.danger,
  },
  editStyle: {
    width: "35%",
    backgroundColor: Colors.edit,
  },
});

module.exports = styles;
