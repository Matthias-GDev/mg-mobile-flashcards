import { ADD_NEW_DECK,GET_ALL_DECKS } from './types'

export function addNewDeck(deck){
    return {
        type: ADD_NEW_DECK,
        deck
    }
}

export function getAllDecks(decks){
    return {
        type: GET_ALL_DECKS,
        decks
    }
}