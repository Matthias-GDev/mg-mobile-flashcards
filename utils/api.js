
import {_saveNewDeck,_getAllDecks} from './_DATA'

export function saveNewDeckAPI(deck) {
  return _saveNewDeck(deck)
}

export function getAllDecksAPI() {
  return _getAllDecks()
}