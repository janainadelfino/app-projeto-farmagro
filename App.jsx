import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider, StatusBar } from "native-base";
import { AccessibilityTheme, THEME } from './src/styles/theme';
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer >
      <NativeBaseProvider theme={AccessibilityTheme}>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}