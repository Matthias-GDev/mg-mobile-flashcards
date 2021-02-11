import React, { Component, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import AddDecks from './AddDecks';
import Decks from './Decks';
import DeckView from './DeckView';
import NewQuestion from './NewQuestion'
import QuizView from './QuizView'
import QuizScore from './QuizScore'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
        <HomeStack.Screen name="Decks" component={Decks}  />             
        <HomeStack.Screen name="DeckView" component={DeckView} options={{headerShown:false}} />
        <HomeStack.Screen name="NewQuestion" component={NewQuestion} options={{headerShown:false}}/>
        <HomeStack.Screen name="QuizView" component={QuizView} options={{headerShown:false}}/>
        <HomeStack.Screen name="QuizScore" component={QuizScore} options={{headerShown:false}}/>
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
                      activeTintColor: 'purple',
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