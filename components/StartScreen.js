import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import AddDecks from './AddDecks';
import Decks from './Decks';
import DeckView from './DeckView';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
        <HomeStack.Screen name="Decks" component={Decks} />             
        <HomeStack.Screen name="DeckView" component={DeckView} />
   </HomeStack.Navigator>
  );
}

class StartScreen extends Component {
    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Add Deck') 
                        {
                          iconName ='card-plus-outline';
                        } 
                        else if (route.name === 'Decks') 
                        {
                          iconName ='cards';
                        }

                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    },
                    })}
                      tabBarOptions={{
                      activeTintColor: 'tomato',
                      inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Decks" component={HomeStackScreen}/>
                    <Tab.Screen name="Add Deck" component={AddDecks}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default connect()(StartScreen)