import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: width / 50,
    marginBottom: width / 50,
  },
  imageStyle: {
    width: width / 6,
    height: width / 6,
    borderRadius: width / 3,
    marginLeft: width / 50,
  },
  txtTitle: {
    textAlign: "right",
    fontFamily: "main2",
    fontSize: width / 25,
    marginLeft: "2.5%",
  },
  txtDescription: {
    textAlign: "right",
    fontFamily: "main",
    fontSize: width / 30,
  },
  subView: {
    flex: 1,
    marginLeft: "3%",
    alignItems: "flex-end",
  },
});

module.exports = styles;
