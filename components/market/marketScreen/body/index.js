import React, { useState, useCallback } from "react";
import {
  ScrollView,
  FlatList,
  Image,
  RefreshControl,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../../../constants/Colors";

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const BodyMarketScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onPressImage = () => {
    // console.warn("Pressed");
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
        width: "100%",
        backgroundColor: "red",
        padding: "4%",
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
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

export default BodyMarketScreen;
