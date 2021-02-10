
import {_saveNewDeck,_getAllDecks,_deleteDeck} from './_DATA'

export function saveNewDeckAPI(deck) {
  return _saveNewDeck(deck)
}

export function deleteDeckAPI(deck) {
  return _deleteDeck(deck)
}

export function getAllDecksAPI() {
  return _getAllDecks()
}