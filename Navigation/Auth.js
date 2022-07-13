import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./../Screens/Login";
import Signup from "./../Screens/Signup";
import Home11 from "./../Screens/Home";
import Section from "../Screens/HomeScreens/Section";
import Final from "../Screens/HomeScreens/FinalExam";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import q1 from "../Screens/HomeScreens/q1";

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home11} />

        <Stack.Screen name="Section" component={Section} />
        <Stack.Screen name="FINAL" component={Final} />
        <Stack.Screen name="q1" component={q1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Auth;
