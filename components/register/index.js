import React, { useState } from "react";
import { textInputStyle, viewStyle } from "./style";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

const Register = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const onPressHandler = () => {
    console.log("num", mobileNumber);
  };

  const onPressRegisteration = () => {
    navigation.push("RegisterScreen");
  };
  return (
    <View style={viewStyle}>
      <TextInput
        multiline={false}
        autoCorrect={false}
        returnKeyType="search"
        keyboardType="phone-pad"
        style={textInputStyle}
        placeholder="شماره موبایل"
        onChangeText={(number) => setMobileNumber(number)}
      />
      <TouchableOpacity
        onPress={() => onPressHandler()}
        style={{ backgroundColor: "red" }}
      >
        <View>
          <Text>ارسال</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPressRegisteration()}
        style={{ backgroundColor: "red" }}
      >
        <View>
          <Text>ثبت نام</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
