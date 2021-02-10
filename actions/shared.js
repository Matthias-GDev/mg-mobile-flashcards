import { saveNewDeckAPI,getAllDecksAPI,deleteDeckAPI,saveNewQuestionToDeckAPI } from '../utils/api'
import { addNewDeck,getAllDecks,deleteDeck } from '../actions/decks'
import { addNewCard } from "../actions/cards";

export function handleSaveNewDeck(deck) {
    return (dispatch) => {
        const deckdata = deck
        return saveNewDeckAPI(deck)
        .then(() => {
            dispatch(addNewDeck(deckdata))
        })
        .catch(error => {
                console.log("ERROR: " + error);
            }
        )
    }
}

export function handleGetAllDecks() {
     return (dispatch) => {
        return getAllDecksAPI().then(decks => {
            dispatch(getAllDecks(decks))
            
        })
    }
}

export function handleDeleteDeck(deck){
    return (dispatch) => {
        const deckdata = deck
        return deleteDeckAPI(deck)
        .then(() => {
            dispatch(deleteDeck(deckdata))
        })
        .catch(error => {
                console.log("ERROR: " + error);
            }
        )
    }
}

export function handleNewQuestionToDeck(card,deckId){
     return (dispatch) => {
        const carddata = card
        const iddata= deckId
        return saveNewQuestionToDeckAPI(card,deckId)
        .then(() => {
            dispatch(addNewCard(carddata,iddata))
        })
        .catch(error => {
                console.log("ERROR: " + error);
            }
        )
    }
}