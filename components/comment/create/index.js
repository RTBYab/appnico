import { connect } from "react-redux";
import React, { useState } from "react";
import StarRating from "react-native-star-rating";
import { viewStyle, textInputStyle, hLine } from "./style";
import { createComment } from "../../../redux/action/comment";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const CreateComment = ({ market, createComment, navigation }) => {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  const onPressStarRating = (rating) => setRate(rating);
  const onChangeComment = (comment) => setComment(comment);

  const submitComment = () => {
    const marketId = market.market._id;
    createComment({ marketId, comment, rate, navigation });
  };
  return (
    <View style={viewStyle}>
      <View
        style={{
          width: "60%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <StarRating
          animation="rotate"
          starStyle={{ margin: "2.9%" }}
          maxStars={5}
          rating={rate}
          starSize={23}
          reversed={true}
          fullStarColor={"orange"}
          selectedStar={(rating) => onPressStarRating(rating)}
        />
      </View>

      <Text style={textInputStyle}>ثبت نظر</Text>
      <View style={{ alignItems: "center" }}>
        <View style={hLine} />
      </View>

      <View style={{ borderWidth: 0.4, bordeColor: "black", margin: "3%" }}>
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder="نظنظظنظن"
          onChangeText={(comment) => onChangeComment(comment)}
          style={{ textAlign: "right", height: "30%" }}
        />
      </View>

      <TouchableOpacity
        onPress={submitComment}
        style={{ backgroundColor: "orange", width: "80%", alignSelf: "center" }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ textAlign: "right" }}>ارسال</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  market: state.market,
});

export default connect(mapStateToProps, { createComment })(CreateComment);
