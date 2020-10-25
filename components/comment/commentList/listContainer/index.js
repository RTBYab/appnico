import {
  touchable,
  imageStyle,
  txtTitle,
  txtDescription,
  subView,
} from "./styles";
import React from "react";
import StarRating from "react-native-star-rating";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function index({
  rate,
  title,
  image,
  onPress,
  description,
  renderLeftActions,
}) {
  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      {description && description.length > 60 ? (
        <TouchableOpacity style={touchable} onPress={onPress}>
          <View style={subView}>
            <StarRating
              disabled={true}
              rating={rate}
              starSize={14}
              reversed={true}
              fullStarColor={"orange"}
              emptyStarColor={"white"}
            />

            <Text style={txtTitle}>{" " + title}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={txtDescription}>
              {description}
            </Text>
          </View>
          <Image style={imageStyle} source={image} />
        </TouchableOpacity>
      ) : (
        <View style={touchable}>
          <View style={subView}>
            <StarRating
              disabled={true}
              rating={rate}
              starSize={14}
              reversed={true}
              fullStarColor={"orange"}
              emptyStarColor={"white"}
            />

            <Text style={txtTitle}>{" " + title}</Text>
            <Text style={txtDescription}>{description}</Text>
          </View>
          <Image style={imageStyle} source={image} />
        </View>
      )}
    </Swipeable>
  );
}
