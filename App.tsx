import React, { useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  AppRegistry
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { AuthProvider } from './src/contexts/auth';
import { Routes } from './src/routes';
import { store } from './src/store';

import theme from './src/global/styles/theme';

// Need manually add Intl polyfill for react-native app
import 'intl';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'android') {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  if (typeof (Intl as any).__disableRegExpRestore === 'function') {
    (Intl as any).__disableRegExpRestore();
  }
}
import 'intl/locale-data/jsonp/en';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StatusBar style='auto' translucent backgroundColor='transparent'/>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Provider>
      </ThemeProvider>
    </GestureHandlerRootView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
