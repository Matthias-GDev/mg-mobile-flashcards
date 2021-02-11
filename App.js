import * as React from "react";
import { StyleSheet,View, Text } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import StartScreen from './components/StartScreen'

import reducer from './reducers'
import middleware from './middleware'

import { setLocalNotification } from './notifications/index';

const store = createStore(reducer,middleware)



class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render(){
    return(
      <Provider store={store}>
        <StartScreen />
      </Provider>
    )
  };
}

export default App

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#cfe2f3'
  }
});
