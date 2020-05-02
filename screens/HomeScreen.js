import * as React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import TextHeader from "../components/home/textHeader";
import SearchTextInput from "../components/home/search";
import SearchButton from "../components/home/searchButton";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 25,
        backgroundColor: Colors.screenBackgroundColor,
      }}
    >
      <TextHeader />
      <SearchTextInput />
      <SearchButton />
    </View>
  );
};

export default HomeScreen;
