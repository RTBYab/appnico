import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import CommentList from "../../commentList/index";
import { imageProfileStyle, viewStyle } from "./style";
import { Text, Image, TouchableOpacity } from "react-native";

const HeaderMarketScreen = ({ navigation, comment }) => {
  // For Modal Section [isVisible]

  // ImageProfileModal Function
  const onPresstoggleDrawer = () => navigation.toggleDrawer();
  const commentList = () => navigation.push("CommentList");

  return (
    <View style={viewStyle}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Rate</Text>
        <Text>4.5</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>باشگاه مشتریان</Text>
        <Text>{}</Text>
      </View>
      <TouchableOpacity onPress={commentList}>
        {/* <View style={{ flex: 1, alignItems: "center" }}> */}
        <Text>نظرات</Text>
        {/* </View> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPresstoggleDrawer}>
        <Image
          source={require("../../../../assets/images/robot-dev.png")}
          resizeMode="cover"
          style={imageProfileStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  comment: state.comment,
});

export default connect(mapStateToProps, null)(HeaderMarketScreen);
