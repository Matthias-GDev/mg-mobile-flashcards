import { ADD_NEW_DECK,GET_ALL_DECKS,DELETE_DECK  } from '../actions/types'

export default function decks (state = {}, action) {
    
    console.log("Action: "+ Object.values(action))

    switch(action.type){
        case ADD_NEW_DECK:
            const { id, title, timecreated } = action.deck;
            return{
                ...state,
				[title]: {
					id,
					title,
                    timecreated,
					questions: []
				}
            }

        case GET_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            }

        case DELETE_DECK:
            const { deck } = action;
            const deckTitle = deck.title
            const { [deckTitle]: value, ...restDecks } = state;
            return restDecks;
                
        default:
            return state
    }
}
