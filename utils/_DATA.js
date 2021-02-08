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
  }
}

export function _getAllDecks (){
     console.log("_getAllDecks")
     return new Promise((res, rej) => {
      return res(decks)
    })
}


export function _saveNewDeck (deck){
  console.log("_saveNewDeck")
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