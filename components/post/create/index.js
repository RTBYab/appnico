import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";
import ImgPicker from "../../imgPicker";
import React, { useState } from "react";
import { createPost } from "../../../redux/action/post";
import { viewStyle, textStyle, submitButton } from "./style";

const CreatePost = ({ createPost, post, user, navigation }) => {
  const [photo, setPhoto] = useState(null);
  const [disable, setDisable] = useState(true);
  const submitImage = async (imagePath) => {
    setPhoto(imagePath);
    setDisable(!disable);
  };
  const id = user.user._id;

  const submitImageButton = () => createPost({ id, photo, navigation });

  const helperTextRender = () =>
    photo === null ? (
      <Text style={textStyle}>برای انتخاب عکس بر روی تصویر فوق کلیک کنید</Text>
    ) : (
      <View />
    );

  return post.loading === true ? (
    <ActivityIndicator />
  ) : (
    <KeyboardAvoidingView style={viewStyle}>
      <ImgPicker submitImage={submitImage}>
        {photo === null ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../../../assets/images/market.png")}
              style={{ borderRadius: 9, width: 100, height: 100 }}
            />
          </View>
        ) : (
          <Image
            source={{ uri: photo }}
            style={{ borderRadius: 9, width: 100, height: 100 }}
          />
        )}
      </ImgPicker>
      {helperTextRender()}
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lime",
          alignSelf: "center",
          width: "55%",
        }}
        onPress={() => submitImageButton()}
        disabled={disable}
      >
        <View style={submitButton}>
          <Text style={textStyle}>ارسال</Text>
        </View>
      </TouchableOpacity>
      <TextInput />
      <TextInput />
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  post: state.post,
});

export default connect(mapStateToProps, { createPost })(CreatePost);
