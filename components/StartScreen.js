import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import AddDecks from './AddDecks';
import Decks from './Decks';

const Tab = createBottomTabNavigator();

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
                    <Tab.Screen name="Decks" component={Decks}/>
                    <Tab.Screen name="Add Deck" component={AddDecks}/>
                    
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default connect()(StartScreen)