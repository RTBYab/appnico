import { connect } from "react-redux";
import React, { useState } from "react";
import BackArrow from "../components/backArrow";
import ApiSettings from "../constants/ApiSettings";
import { updatePost } from "../redux/action/post";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";

const EditImageDetailScreen = ({ navigation, route, user, updatePost }) => {
  const { item } = route.params;
  const { title, body, photo, _id } = item;

  const [rTitle, setRTitle] = useState(title);
  const [rBody, setRBody] = useState(body);
  const [rPhoto, setRPhoto] = useState(
    ApiSettings.URL.PostImages + `${user.user._id}/${photo}`
  );

  const onPressHandler = async () => {
    const userId = user.user._id;
    await updatePost({ _id, rPhoto, rTitle, rBody, userId, navigation });
  };

  return (
    <View style={{ alignItems: "flex-end" }}>
      <BackArrow navigation={navigation} />

      <TextInput
        autoCorrect={false}
        placeholder="iuii"
        defaultValue={rTitle}
        onChangeText={(e) => setRTitle(e)}
        underlineColorAndroid="transparent"
      />

      <TextInput
        autoCorrect={false}
        placeholder="hi"
        onChangeText={(e) => setRBody(e)}
        defaultValue={rBody}
        underlineColorAndroid="transparent"
      />

      <Image source={{ uri: rPhoto }} style={{ width: 100, height: 100 }} />
      <TouchableOpacity onPress={() => onPressHandler()}>
        <View>
          <Text>ویرایش</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { updatePost })(EditImageDetailScreen);
