import {
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import ImgPicker from "../imgPicker";
import { connect } from "react-redux";
import React, { useState } from "react";
import { scrollViewStyle, mainViewStyle, imageStyle } from "./style";

import {Block,Text,Input} from 'galio-framework';

const {mWidth} = Dimensions.get('window')

const Settings = ({ market }) => {
  const [image, setImage] = useState();
  const submitImage = async (imagePath) => {
    setImage({ image: imagePath });
    // const { auth, store, uploadStoreImage } = this.props;
    // await uploadStoreImage({ id, token, photo });
  };
console.log('market', market)
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
            source={require("../../assets/images/market.png")}
          />

        </ImgPicker>
        <TouchableOpacity>
        <Text>پروفایل فروشگاه</Text>
        </TouchableOpacity>

        <TextInput />
        <Text>توضیحات</Text>
        <TextInput />
        <TouchableOpacity>
          <Text>خروج از حساب کاربری</Text>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  market: state.market,
});
export default connect(mapStateToProps, null)(Settings);
