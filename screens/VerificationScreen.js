import React from "react";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native";
import BackArrow from "../components/backArrow";
import Verification from "../components/auth/verification";

const VerificationScreen = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}
    >
      <BackArrow navigation={navigation} />
      <Verification navigation={navigation} mobileNumber={data} />
    </SafeAreaView>
  );
};
export default VerificationScreen;
