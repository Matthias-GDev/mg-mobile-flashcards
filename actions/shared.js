import { saveNewDeckAPI,getAllDecksAPI } from '../utils/api'
import { addNewDeck,getAllDecks } from '../actions/decks'

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