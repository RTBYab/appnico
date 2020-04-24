import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Awesome app",
        }}
      />
      {/* <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My profile",
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          gestureEnabled: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};
export default StackNavigation;
