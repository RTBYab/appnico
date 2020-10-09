import { View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import PostBodyHelper from "../../../post/main";
import { getMarketPosts } from "../../../../redux/action/post";
import AddBottonHelper from "./helper";

const BodyMarketScreen = ({ navigation, getMarketPosts, user }) => {
  useEffect(() => {
    if (user && user.user !== null && user.user._id) {
      getMarketPosts(user.user._id);
    }
  }, [getMarketPosts]);
  return (
    <View
      style={{
        flex: 1,
        marginBottom: "18%",
      }}
    >
      <PostBodyHelper navigation={navigation} />
      <AddBottonHelper navigation={navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { getMarketPosts })(BodyMarketScreen);
