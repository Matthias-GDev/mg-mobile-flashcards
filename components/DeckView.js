import { Component } from "react"
import React from 'react';
import { View,Text} from 'react-native';
import { connect } from 'react-redux';
import { handleDeleteDeck } from '../actions/shared'

import FcButton from "./FcButton";

class DeckView extends Component{

    constructor(props){
        super(props)
        this.onHandleAddNewCard = this.onHandleAddNewCard.bind(this)
        this.onHandleStartQuiz = this.onHandleStartQuiz.bind(this)
        this.onHandleDeleteDeck = this.onHandleDeleteDeck.bind(this)
    }

    onHandleAddNewCard(){
        console.log("Add new Card")
        const {navigation,deck} = this.props
        console.log("toNewCardQuestion: " + deck.title)
        navigation.navigate('NewQuestion',{ deckId:deck.title })
    }

    onHandleStartQuiz(){
        const {navigation,deck} = this.props
        navigation.navigate('QuizView',{deckId:deck.title})
    }

    onHandleDeleteDeck(){
        const {navigation,deck} = this.props
        this.props.dispatch(handleDeleteDeck(deck))
        
        setTimeout(function() {
				 navigation.navigate('Decks')
		}, 100);
    }

    render(){
        const { deck } = this.props
        const decktitle = deck?deck.title:''
        const countCards = deck!=null && deck.questions ? deck.questions.length:0

        return(
            <View style={{maxHeight:'98%',minHeight:'98%',alignItems: 'center',}}>
                <View style={{minWidth:'85%', maxWidth:'95%',minHeight:'95%',flex:1,flexDirection:'column',padding:10}}>
                    <Text>{"\n\n\n"}</Text>
                    <View style={{height:'10%', alignItems:'center',flex:1,justifyContent: 'flex-start'}}>
                        <Text style={{fontSize:40,fontWeight:'bold'}}>{decktitle}</Text>
                        <Text style={{fontSize:25}}>{countCards} {countCards>1?'cards':'card'}</Text>
                    </View>

                    <View style={{height:'40%',flex:1,justifyContent: 'flex-end'}}>
                        <FcButton backColor='black' title='Add Card' onClick={this.onHandleAddNewCard}/>
                        <FcButton backColor='black' title='Start Quiz' onClick={this.onHandleStartQuiz} fcDisabled={countCards===0?true:false}/>
                        <Text>{"\n"}</Text>
                        <FcButton backColor='red' title='Delete Deck' onClick={this.onHandleDeleteDeck}/>
                    </View>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state , { route }) {

    const { deckId } = route.params;
    const deckItem = deckId ? state.decks[deckId] : {'title':'error'}

	return {
        deck:deckItem        
	};
}

export default connect(mapStateToProps)(DeckView)