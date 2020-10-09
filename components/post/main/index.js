import { connect } from "react-redux";
import React, { useState, useCallback } from "react";
import ApiSettings from "../../../constants/ApiSettings";
import { getMarketPosts } from "../../../redux/action/post";
import {
  Image,
  FlatList,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const PostBodyHelper = ({ post, user, navigation, getMarketPosts }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    if (user && user.user && user.user._id !== null) {
      setRefreshing(true);
      getMarketPosts(user.user._id).then(() => setRefreshing(false));
    }
  }, [refreshing]);

  return (
    <FlatList
      numColumns={3}
      data={post.posts}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ImageDetailScreen", { item });
          }}
        >
          <Image
            source={{
              uri:
                ApiSettings.URL.PostImages + `${user.user._id}/${item.photo}`,
            }}
            style={{
              flex: 1,
              width: width / 3,
              height: width / 3,
              margin: 1,
            }}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(_, index) => index.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
  user: state.user,
});

export default connect(mapStateToProps, { getMarketPosts })(PostBodyHelper);
