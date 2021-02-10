import { ADD_NEW_CARD } from './types'

export function addNewCard(card,deckId){
    return {
        type: ADD_NEW_CARD,
        card,
        deckId
    }
}