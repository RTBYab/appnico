import React, { useEffect } from "react";
import styles from "./style";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";

const CreateMarket = ({ navigation, user }) => {
  // useEffect(() => {
  //   console.log("Useeer", user);
  // });

  if (user.isMarketOwner === true) {
    navigation.replace("MarketScreen");
  }

  const isAuthenticated = () => {
    if (user.isAuthenticated === false) {
      navigation.push("LoginScreen");
    } else {
      navigation.push("MarketScreen");
    }
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
        onPress={() => isAuthenticated()}
      >
        <View style={styles.buttonViewStyle}>
          <Text style={styles.textStyle}>ساخت فروشگاه</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, null)(CreateMarket);
