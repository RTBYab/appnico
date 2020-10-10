import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ImgPicker from "../imgPicker";
import { connect } from "react-redux";
import React, { useState } from "react";
import { scrollViewStyle, mainViewStyle, imageStyle } from "./style";



const Settings = ({ market,navigation }) => {
  const [image, setImage] = useState();
  const submitImage = async (imagePath) => {
    setImage({ image: imagePath });
    // const { auth, store, uploadStoreImage } = this.props;
    // await uploadStoreImage({ id, token, photo });
  };
  return (
    <ScrollView style={scrollViewStyle}>
      <View style={mainViewStyle}>
        <ImgPicker
          submitImage={() => {
            submitImage();
          }}
        >
          <Image
            style={imageStyle}
            source={market.market.img || require("../../assets/images/market.png")}
          />

        </ImgPicker>
        <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
        <Text style={{fontFamily:'main'}}>پروفایل فروشگاه</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{fontFamily:'main'}}>خروج از حساب کاربری</Text>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  market: state.market,
});
export default connect(mapStateToProps, null)(Settings);
