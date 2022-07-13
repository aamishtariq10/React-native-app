import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './Navigation/Auth';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {
  return ( 

   <Auth/>
  );
}

export default App;
