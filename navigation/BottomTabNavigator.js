import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Settings and Screens
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import CreateScreen from "../screens/CreatetScreen";
import MarketScreen from "../screens/MarketScreen";
import ImageDetailScreen from "../screens/ImageDetailScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SetOntheMapScreen from "../screens/SetOntheMapScreen";
import VerificationScreen from "../screens/VerificationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screens/SettingScreen";

// Initializing ...
const BottomTab = createBottomTabNavigator();
const SettingStack = createDrawerNavigator();
const MarketStack = createStackNavigator();
const HomeStack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Market";

// Function
const HomeStackScreen = () => (
  <HomeStack.Navigator
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
    <MarketStack.Screen name="Market" component={CreateScreen} />
    <MarketStack.Screen name="MarketScreen" component={MarketScreen} />
    <MarketStack.Screen name="LoginScreen" component={LoginScreen} />
    <MarketStack.Screen name="RegisterScreen" component={RegisterScreen} />
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
  </MarketStack.Navigator>
);

const TabsStackScreen = () => (
  <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
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
