import Colors from "../../../constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  imageStyle: {
    width: width / 4,
    height: width / 4,
  },
  textInputStyle: {
    width: "75%",
    height:'13%',
    textAlign: "right",
    fontFamily: "main",
    fontSize: width / 24,
    borderColor: Colors.mainColor,
  },
  textLabelInput: {
    marginTop: "7%",
    fontFamily: "main",
    textAlign: "right",
    fontSize: width / 30,
    marginRight: width / 50,
    marginBottom: width / 75,
  },
  buttonText: {
    fontFamily: "main2",
    // textAlign: "center",
    fontSize: width / 22,
    color: Colors.mainTextColor,
  },
  secondaryView: {
    alignItems: "center",
    padding: "0.25%",
  },
  buttonStyle: {
    width: "75%",
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width / 75,
    backgroundColor: Colors.mainColor,
  },
  noticeTextStyle: {
    marginBottom: "8%",
    fontFamily: "main",
    fontSize: width / 35,
  },
  textRegisterationNotice: {
    marginTop: "8%",
    fontFamily: "main",
    fontSize: width / 35,
  },
  imageViewStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});

module.exports = styles;
