import { connect } from "react-redux";
import React, { useEffect, useState, useCallback } from "react";
import { getComment } from "../../../redux/action/comment";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";

const CommentList = ({ getComment, market, comment }) => {
  useEffect(() => {
    let marketId = market.market._id;
    getComment(marketId);
  }, [getComment]);
  const { loading } = comment;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    let marketId = market.market._id;
    setRefreshing(true);
    getComment(marketId).then(() => setRefreshing(false));
  }, [refreshing]);

  return loading == true ? (
    <ActivityIndicator />
  ) : (
    <View style={{ flex: 1 }}>
      <FlatList
        // inverted={true}
        data={comment.comments}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        // onEndReached={handleLoadMore}
        onEndReachedThreshold={25}
        renderItem={({ item }) => <Text>{item.comment} </Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  market: state.market,
  comment: state.comment,
});

export default connect(mapStateToProps, { getComment })(CommentList);
