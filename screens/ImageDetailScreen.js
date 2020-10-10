import React from "react";
import { connect } from "react-redux";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import BackArrow from "../components/backArrow";
import { deletePost } from "../redux/action/post";
import ApiSettings from "../constants/ApiSettings";
import { View, Dimensions, TouchableOpacity, Image, Text } from "react-native";

const { width,height } = Dimensions.get("window");

const ImageDetailScreen = ({ navigation, route, deletePost, user }) => {

  const { item } = route.params;
  const { photo, postedBy, _id, title, body } = item;

  

  const trashOnPress = () => deletePost(_id, navigation);

  const updateOnPress = () =>
    navigation.navigate("EditImageDetailScreen", { item });


  const isOwner = () =>
    user.user._id === postedBy ? (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        
        <TouchableOpacity onPress={() => trashOnPress()}>
          <Ionicons
            name="ios-trash"
            size={width / 15}
            color={Colors.mainColor}
            style={{ margin: "6%", marginTop:'-89%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateOnPress()}>
          <Ionicons
            name="md-create"
            size={width / 15}
            color={Colors.mainColor}
            style={{ marginTop:'-221%' }}

          />
        </TouchableOpacity>
      </View>
    ) : (
      <View />
    );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.screenBackgroundColor }}>
      {console.log(user.user._id === postedBy)}
      <BackArrow navigation={navigation} />
      <View
        style={{ flex:0.75,alignItems: "center", justifyContent:'center' ,marginBottom: "3%", shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,}}
      >
      <View style={{backgroundColor:'#919191', 

borderRadius: width / 64,

            height: height / 2.9, width: width / 1.3, alignItems:'center'}}>
           
        <Image
          resizeMode="contain"
          source={{
            uri: ApiSettings.URL.PostImages + `${postedBy}/${photo}`,
          }}
          style={{
            width: width / 1.3,
            height: width / 1.3,
            borderRadius: width / 61,
            marginTop: "-18%",
          }}
        />
         {isOwner()}
      </View>

      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
       
      </View>
      { title && title !== null && title !== 'undefined' ? <Text>{title}</Text> : <View />}
      {body && body!== null && body !== 'undefined' ? <Text>{body}</Text> : <View />}
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { deletePost })(ImageDetailScreen);
