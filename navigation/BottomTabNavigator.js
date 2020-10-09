import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Settings and Screens
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import TabBarIcon from "../components/TabBarIcon";
import MarketScreen from "../screens/MarketScreen";
import CreateScreen from "../screens/CreatetScreen";
import SettingScreen from "../screens/SettingScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import CommentListScreen from "../screens/CommentListScreen";
import ImageDetailScreen from "../screens/ImageDetailScreen";
import SetOntheMapScreen from "../screens/SetOntheMapScreen";
import VerificationScreen from "../screens/VerificationScreen";
import CreateCommentScreen from "../screens/CreateCommentScreen";
import EditImageDetailScreen from "../screens/EditImageDetailScreen";

import { createStackNavigator } from "@react-navigation/stack";
// Initializing ...
const BottomTab = createBottomTabNavigator();
const SettingStack = createDrawerNavigator();
const MarketStack = createStackNavigator();
const HomeStack = createStackNavigator();

const INITIAL_ROUTE_NAME = "Market";

// Function
const HomeStackScreen = () => (
  <HomeStack.Navigator
    tabBarOptions={{
      labelStyle: { fontSize: 12 },
      style: { backgroundColor: "blue" },
    }}
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const MarketStackScreen = () => (
  <MarketStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MarketStack.Screen name="CreateMarket" component={CreateScreen} />
    <MarketStack.Screen name="MarketScreen" component={MarketScreen} />
    <MarketStack.Screen name="LoginScreen" component={LoginScreen} />
    <MarketStack.Screen name="RegisterScreen" component={RegisterScreen} />
    <MarketStack.Screen name="CreatePost" component={CreatePostScreen} />
    <MarketStack.Screen name="CreateComment" component={CreateCommentScreen} />
    <MarketStack.Screen name="CommentList" component={CommentListScreen} />

    <MarketStack.Screen
      name="VerificationScreen"
      component={VerificationScreen}
    />

    <MarketStack.Screen
      name="SetOntheMapScreen"
      component={SetOntheMapScreen}
    />
    <MarketStack.Screen
      name="ImageDetailScreen"
      component={ImageDetailScreen}
    />
    <MarketStack.Screen
      name="EditImageDetailScreen"
      component={EditImageDetailScreen}
    />
  </MarketStack.Navigator>
);

const TabsStackScreen = () => (
  <BottomTab.Navigator
    tabBarOptions={{
      labelStyle: { fontSize: 14, fontFamily: "main" },
    }}
    initialRouteName={INITIAL_ROUTE_NAME}
  >
    <BottomTab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        title: "خانه",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="ios-home" />
        ),
      }}
    />

    <BottomTab.Screen
      name="Market"
      component={MarketStackScreen}
      options={{
        header: null,
        title: "فروشگاه من",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="ios-cart" />
        ),
      }}
    />
  </BottomTab.Navigator>
);

const SettingStackScreen = () => (
  <SettingStack.Navigator
    screenOptions={{
      headerShown: false,

    }}
    drawerContentOptions={{
      labelStyle:{
        fontFamily:'main',
        color:'#000'
      },
      
    }}
    
    lazy="true"
    drawerPosition="right"
    overlayColor="transparent"
    drawerType="back"
  >
    <SettingStack.Screen name={"..."} component={TabsStackScreen} />
    <SettingStack.Screen name="تنظیمات" component={SettingScreen} />
  </SettingStack.Navigator>
);

export default () => <SettingStackScreen />;
