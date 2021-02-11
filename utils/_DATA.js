import { generateUID } from './guidgenerator'

let decks = {
   React: {
    id:'jsjl4466cxhrnnejeca1w9',
    title: 'React',
    timecreated:1612791224268,
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    id:'7w0uulc0chjzh1nm35zs3b',
    title: 'JavaScript',
    timecreated:1612791224268,
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Food: {
    id:'7w0uulc0chjzh1nm35zs1b',
    title: 'Food',
    timecreated:1612791224268,
    questions: [
      {
        question: 'Which nuts are used in marzipan?',
        answer: 'Almonds'
      },
      {
        question: 'What is the most famous Mexican beer?',
        answer: 'Corona'
      },
      {
        question: 'Which country is the origin of the cocktail Mojito?',
        answer: 'Cuba'
      },
      {
        question: 'What is Japanese sake made from?',
        answer: 'Rice'
      },
      {
        question: 'Which vitamin is the only one that you will not find in an egg?',
        answer: 'Vitamin C'
      },
      {
        question: 'What is the chemical formula for Table Salt?',
        answer: 'NaC1'
      },
      {
        question: 'What does IPA stand for?',
        answer: 'Indian Pale Ale'
      },
      {
        question: 'Which meat is used in Glamorgan sausages?',
        answer: 'None, they are made from cheese'
      },
      {
        question: 'What ingredient is included in food in a Florentine style?',
        answer: 'Spinach'
      },
      {
        question: 'Which fish is the main ingredient of Scotch Woodcock?',
        answer: 'Anchovy'
      },
    ]
  }
}

export function _saveNewQuestion(card,deckId){
  const cardData = card
  const dId = deckId
  return new Promise((res, rej) => {
    decks[dId].questions.push(card)
    return res(cardData,dId)
  })
}

export function _getAllDecks (){
     return new Promise((res, rej) => {
      return res(decks)
    })
}

export function _deleteDeck(deck){
  const deckData = deck
  const deckId = deck.title
  return new Promise((res, rej) => {
    decks = delete decks[deckId]
    return res(deckData)
  })
}

export function _saveNewDeck (deck){
  return new Promise((res, rej) => {
    
      //Id
      deck.id = generateUID()
      decks = {
        ...decks,
        [deck.title]:deck
      }

      return res(decks)
  })
}