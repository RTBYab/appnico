import React from "react";
import { connect } from "react-redux";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import BackArrow from "../components/backArrow";
import { deletePost } from "../redux/action/post";
import ApiSettings from "../constants/ApiSettings";
import { View, Dimensions, TouchableOpacity, Image, Text } from "react-native";

const { width } = Dimensions.get("window");

const ImageDetailScreen = ({ navigation, route, deletePost, user }) => {
  const { item } = route.params;
  const { photo, postedBy, _id, title, body } = item;

  const trashOnPress = () => deletePost(_id, navigation);

  const updateOnPress = () =>
    navigation.navigate("EditImageDetailScreen", { item });

  const isOwner = () =>
    user.user._id === postedBy ? (
      <View
        style={{
          flexDirection: "row",
          // backgroundColor: "red",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => trashOnPress()}>
          <Ionicons
            name="ios-trash"
            size={width / 15}
            color={Colors.mainColor}
            style={{ margin: "5%" }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateOnPress()}>
          <Ionicons
            name="md-create"
            size={width / 15}
            color={Colors.mainColor}
          />
        </TouchableOpacity>
      </View>
    ) : (
      <View />
    );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}>
      <BackArrow navigation={navigation} />
      <View
        style={{ alignItems: "center", marginTop: "25%", marginBottom: "3%" }}
      >
        <Image
          resizeMode="contain"
          source={{
            uri: ApiSettings.URL.PostImages + `${postedBy}/${photo}`,
          }}
          style={{
            width: width / 1.3,
            height: width / 1.3,
            borderRadius: width / 64,
            marginTop: "3%",
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {isOwner()}
      </View>
      {title !== null && title !== undefined ? <Text>{title}</Text> : <View />}
      {body !== null && body !== undefined ? <Text>{body}</Text> : <View />}
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { deletePost })(ImageDetailScreen);
