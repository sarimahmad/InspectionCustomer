/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../Screens/Main';
import Splash from '../Screens/Splash';
import Report from '../Screens/Report';
import Content from '../Screens/Content';
import Inspection from '../Screens/Inspection';
import Summary from '../Screens/Summary';
import Railing from '../Screens/Railing';
import Flashing from '../Screens/Flashing';
import DeckSurface from '../Screens/DeckSurface';
import Framing from '../Screens/Framing';
import Stairs from '../Screens/Stairs';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import RequirementsGuide from '../Screens/RequirementsGuide';
const Stack = createStackNavigator();


function AuthNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Inspection" component={Inspection} />
      <Stack.Screen name="Summary" component={Summary} />
      <Stack.Screen name="Railing" component={Railing} />
      <Stack.Screen name="Flashing" component={Flashing} />
      <Stack.Screen name="DeckSurface" component={DeckSurface} />
      <Stack.Screen name="Framing" component={Framing} />
      <Stack.Screen name="Stairs" component={Stairs} />
      <Stack.Screen name="RequirementsGuide" component={RequirementsGuide} />
  
    </Stack.Navigator>
  );
}

function MainNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AccountStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AccountStack" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;

