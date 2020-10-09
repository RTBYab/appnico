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
import { loginByPhone } from "../../../redux/action/user";

const Login = ({ navigation, loginByPhone }) => {
  const [mobileNumber, setMobileNumber] = useState(null);

  const onPressHandler = () => {
    if (mobileNumber.length == 0) {
      return Alert.alert(
        "خطا",
        "لطفا شماره موبایل خود را بصورت صحیح وارد نمایید"
      );
    }
    loginByPhone({ mobileNumber, navigation });
  };

  const onPressRegisterationScreen = () => {
    navigation.push("RegisterScreen");
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
            <Text style={buttonText}>ورود</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPressRegisterationScreen()}
          style={{ marginTop: "6%" }}
        >
          <View>
            <Text style={textLabelInput}>هنوز ثبت نام نکرده اید؟ </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default connect(null, { loginByPhone })(Login);
