import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Settings and Screens
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import CreateScreen from "../screens/CreatetScreen";
import MarketScreen from "../screens/MarketScreen";
import { createStackNavigator } from "@react-navigation/stack";

// Initializing ...
const BottomTab = createBottomTabNavigator();
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
  </MarketStack.Navigator>
);

export default () => (
  <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
    <BottomTab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        title: "خانه",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-code-working" />
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
          <TabBarIcon focused={focused} name="md-book" />
        ),
      }}
    />
  </BottomTab.Navigator>
);
