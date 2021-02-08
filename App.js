import * as React from "react";
import { StyleSheet,View, Text } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import StartScreen from './components/StartScreen'

import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer,middleware)

export default function App() {
  return (
    <Provider store={store}>
        <StartScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#cfe2f3'
  }
});
