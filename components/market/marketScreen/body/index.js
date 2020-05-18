import {
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
//
// import Colors from "../../../../constants/Colors";
import { connect } from "react-redux";
import React, { useState, useCallback } from "react";
import BodyHelper from "./bodyhelper";

// Refreshing
function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const BodyMarketScreen = ({ navigation, market }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onPressImage = () => {
    navigation.push("ImageDetailScreen");
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: "4%",
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <BodyHelper />
        <TouchableWithoutFeedback
          onPress={() => {
            onPressImage();
          }}
        >
          <Image source={require("../../../../assets/images/icon.png")} />
        </TouchableWithoutFeedback>
        <TouchableOpacity>
          <Image source={require("../../../../assets/images/icon.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  market: state.market,
});

export default connect(mapStateToProps, null)(BodyMarketScreen);
