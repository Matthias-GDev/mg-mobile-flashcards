
import {_saveNewDeck,_getAllDecks,_deleteDeck,_saveNewQuestion} from './_DATA'

export function saveNewDeckAPI(deck) {
  return _saveNewDeck(deck)
}

export function deleteDeckAPI(deck) {
  return _deleteDeck(deck)
}

export function getAllDecksAPI() {
  return _getAllDecks()
}

export function saveNewQuestionToDeckAPI(card,deckId){
  return _saveNewQuestion(card,deckId)
}