import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  viewStyle: {
    flex: 0.1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  imageProfileStyle: {
    zIndex: 100,
    width: height / 15,
    height: height / 15,
    marginRight: "1%",
    borderRadius: height / 2,
  },
});

module.exports = styles;
