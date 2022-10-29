import 'react-native-gesture-handler';
import React, { createContext, useContext, useReducer } from 'react';

import { NativeBaseProvider, StatusBar } from "native-base";
import { AccessibilityTheme } from './src/styles/theme';
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from './src/routes';
import { StateContext, StateProvider, useStateValue } from './src/utils/stateProvider';

export default function App() {
  const STORAGE_KEY = '@tema';
  const initialState = {
    theme: 1
  };


 
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        
        return {
          ...state,
          theme: action.newTheme
        };

      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer >
        <StateContext.Consumer>{value => (
          <NativeBaseProvider theme={AccessibilityTheme(value)}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />
            <Routes />
          </NativeBaseProvider>)}
        </StateContext.Consumer>
      </NavigationContainer>
    </StateProvider>
  );
}