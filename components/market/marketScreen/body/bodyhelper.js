import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

const BodyHelper = ({ post }) => {
  return (
    <View>
      {console.log("uyuyu", post)}
      <Text>Hi</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, null)(BodyHelper);
