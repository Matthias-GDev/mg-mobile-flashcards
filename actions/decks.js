import { ADD_NEW_DECK,GET_ALL_DECKS,DELETE_DECK } from './types'

export function addNewDeck(deck){
    return {
        type: ADD_NEW_DECK,
        deck
    }
}

export function deleteDeck(deck){
    return {
        type: DELETE_DECK,
        deck
    }
}

export function getAllDecks(decks){
    return {
        type: GET_ALL_DECKS,
        decks
    }
}