import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../../constants/Colors";

const { width } = Dimensions.get("window");

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
  bottonStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: "40%",
  },
  textStyle: {
    fontSize: width / 25,
    fontFamily: "main",
    textAlign: "right",
    color: Colors.mainTextColor,
  },
  commentTextStyle: {
    fontSize: width / 23,
    fontFamily: "main2",
    textAlign: "center",
    color: Colors.mainTextColor,
  },
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2.5%",
  },
  bottomViewStyle: {
    backgroundColor: "orange",
    width: "190%",
    padding: "5%",
  },
});

module.exports = styles;
