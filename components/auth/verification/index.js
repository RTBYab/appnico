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
} from "./style";
import { verfication } from "../../../redux/action/user";
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

const Verification = ({ mobileNumber, navigation, verfication }) => {
  const [code, setCode] = useState("");

  const onPressHandler = () => {
    if (code.length == 0) {
      Alert.alert("خطا", "لطفا شماره موبایل خود را بصورت صحیح وارد نمایید");
    }
    verfication({ code, navigation, mobileNumber });
  };


  return (
    <KeyboardAvoidingView style={viewStyle}>
      <View style={imageViewStyle}>
        <Image
          source={require("../../../assets/images/robot-dev.png")}
          style={imageStyle}
        />
      </View>
      <Text style={textLabelInput}>کد دریافتی:</Text>
      <View style={secondaryView}>
        <TextInput
          maxLength={6}
          multiline={false}
          autoCorrect={false}
          style={textInputStyle}
          returnKeyType="go"
          keyboardType="phone-pad"
          placeholder="******"
          onChangeText={(number) => setCode(number)}
          underlineColorAndroid={Colors.screenBackgroundColor}
        />
 <View 
         style={{backgroundColor:'#000', width:"76%", height:'0.2%',
         marginBottom:'3.5%', marginTop:'-0.95%'}}
         />

        <TouchableOpacity onPress={() => onPressHandler()} style={buttonStyle}>
          <View>
            <Text style={buttonText}>اعتبار سنجی</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: "6%" }}
        >
          <View>
            <Text style={textLabelInput}>تصحیح شماره همراه؟ </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default connect(null, { verfication })(Verification);
