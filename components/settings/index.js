import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ImgPicker from "../imgPicker";
import { connect } from "react-redux";
import React, { useState } from "react";
import { scrollViewStyle, mainViewStyle, imageStyle } from "./style";

const Settings = ({ market }) => {
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
            source={require("../../assets/images/market.png")}
          />
          <Text>Image</Text>
        </ImgPicker>

        <Text>نام کسب و کار</Text>
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
