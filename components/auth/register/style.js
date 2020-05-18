import Colors from "../../../constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: "100%",
    // alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: width / 4,
    height: width / 4,
  },
  textInputStyle: {
    width: "80%",
    // height:'100%',
    padding: "4%",
    textAlign: "right",
    fontFamily: "main",
    fontSize: width / 24,
    borderRadius: width / 75,
    marginBottom: width / 75,
    borderWidth: width / 890,
    borderColor: Colors.mainColor,
  },
  textLabelInput: {
    marginTop: "9%",
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
  },
  buttonStyle: {
    width: "75%",
    height: "20%",
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
