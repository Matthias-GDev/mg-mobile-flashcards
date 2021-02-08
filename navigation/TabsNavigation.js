import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import * as colors from '../utils/colors';
import { FontAwesome } from '@expo/vector-icons';

import { Decks } from '../components/Decks'
import { AddDecks } from '../components/AddDecks'
import { StartScreen } from '../components/StartScreen'

export const TabsNavigation = TabNavigator(
	{
		StartScreen: {
			screen: Decks,
			navigationOptions: {
				tabBarLabel: 'Decks',
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome name="home" size={30} color={tintColor} />
				)
			}
		},
		AddDeck: {
			screen: AddDecks,
			navigationOptions: {
				tabBarLabel: 'Add Deck',
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome name="plus" size={30} color={tintColor} />
				)
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: colors.white,
			style: {
				height: 56,
				backgroundColor: Platform.OS === 'ios' ? colors.black : colors.red
			}
		}
	}
);