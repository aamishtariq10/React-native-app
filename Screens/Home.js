import * as React from "react";
import { Button, View, Text } from "react-native";
import Home1 from "./../Screens/HomeScreens/Fixtures";
import Home2 from "./../Screens/HomeScreens/News";
import Home3 from "./../Screens/HomeScreens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Fixtures: "md-calendar",
  News: "md-book",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "lightgray",
        activeBackgroundColor: "#c4461c",
        inactiveBackgroundColor: "black",
        style: {
          backgroundColor: "white",
          paddingBottom: 15,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="Fixtures"
        component={Home1}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="News"
        component={Home2}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="Settings"
        component={Home3}
      />
    </Tab.Navigator>
  );
}
