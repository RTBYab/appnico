import {
  createMarket,
  createComment,
  getMarketByMarketOwnerId,
} from "../../../redux/action/market";
//
import styles from "./style";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import setAuthToken from "../../../helper/setAuthToken";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CreateMarket = ({
  user,
  market,
  navigation,
  createMarket,
  createComment,
  getMarketByMarketOwnerId,
}) => {
  // Get Market Details
  if (user.user !== null && user.user._id) {
    setAuthToken(user.token);
    useEffect(() => {
      let userId = user.user._id;
      getMarketByMarketOwnerId(userId);
    }, []);
  }
  // Create Market
  if (market.market !== null && market.market.marketOwner !== undefined) {
    navigation.navigate("CreateMarket");
  }
  // Ckeck If user Exist
  if (user.user !== null && user.user._id) {
    navigation.replace("MarketScreen");
  }

  const createMarketFunction = () => {
    if (user.isAuthenticated === false) {
      return navigation.push("LoginScreen");
    }
    let id = user.user._id;
    let token = user.token;
    createMarket({ id, navigation, token });
  };

  const submitComment = () => {
    // createComment({ marketId, navigation });
  };

  return (
    <View style={styles.viewStyle}>
      <Image
        source={require("../../../assets/images/market.png")}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={createMarketFunction}
      >
        <View style={styles.buttonViewStyle}>
          <Text style={styles.textStyle}>ساخت فروشگاه</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginTouchableOpacity}
        onPress={submitComment}
      >
        <View>
          <Text style={styles.textLoginStyle}>ورود به فروشگاه</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  market: state.market,
});
export default connect(mapStateToProps, {
  getMarketByMarketOwnerId,
  createMarket,
  createComment,
})(CreateMarket);
