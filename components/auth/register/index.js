import { connect } from "react-redux";
import React, { useState } from "react";
import {
  viewStyle,
  imageStyle,
  buttonText,
  buttonStyle,
  secondaryView,
  textInputStyle,
  textLabelInput,
  imageViewStyle,
  noticeTextStyle,
} from "./style";
import { registerByPhone } from "../../../redux/action/user";
import {
  View,
  Text,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Colors from "../../../constants/Colors";

const Login = ({ navigation, registerByPhone }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const onPressHandler = () => {
    if (mobileNumber.length == 0) {
      return Alert.alert(
        "خطا",
        "لطفا شماره موبایل خود را بصورت صحیح وارد نمایید"
      );
    }
    registerByPhone({ mobileNumber, navigation });
  };

  return (
    <KeyboardAvoidingView style={viewStyle}>
      <View style={imageViewStyle}>
        <Image
          source={require("../../../assets/images/robot-dev.png")}
          style={imageStyle}
        />
      </View>
      <Text style={textLabelInput}>شماره موبایل:</Text>
      <View style={secondaryView}>
        <TextInput
          maxLength={11}
          multiline={false}
          autoCorrect={false}
          style={textInputStyle}
          returnKeyType="search"
          keyboardType="phone-pad"
          placeholder="۹*********"
          onChangeText={(number) => setMobileNumber(number)}
          underlineColorAndroid={Colors.screenBackgroundColor}
        />
        <View 
         style={{backgroundColor:'#000', width:"76%", height:'0.2%',
         marginBottom:'3.5%', marginTop:'-0.95%'}}
         />

        <Text style={noticeTextStyle}>
          *لطفا شماره موبایل خود را بدون صفر و با کیبورد انگلیسی وارد کنید
        </Text>

        <TouchableOpacity onPress={() => onPressHandler()} style={buttonStyle}>
          <View>
            <Text style={buttonText}>ثبت نام</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default connect(null, { registerByPhone })(Login);
