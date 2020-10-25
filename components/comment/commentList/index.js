import { connect } from "react-redux";
import ListContainer from "../commentList/listContainer";
import { getComment } from "../../../redux/action/comment";
import React, { useEffect, useState, useCallback } from "react";
import ListItemSeperators from "../../utils/listItemSeperators";
import RenderRightActions from "../../utils/swipe/renderRight";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";

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
    <FlatList
      // inverted={true}
      data={comment.comments}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      // onEndReached={handleLoadMore}
      onEndReachedThreshold={25}
      renderItem={({ item }) => (
        <ListContainer
          rate={item.rate}
          title={item.comment}
          description="سیسب سیبسیب ب سب سیب س ب بثص ق صثق صث ق صثق صثق  د  طذد سب س بس ب"
          onPress={() => console.log("pressed!", item)}
          renderLeftActions={RenderRightActions}
          image={require("../../../assets/images/market.png")}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ItemSeparatorComponent={ListItemSeperators}
    />
  );
};

const mapStateToProps = (state) => ({
  market: state.market,
  comment: state.comment,
});

export default connect(mapStateToProps, { getComment })(CommentList);
