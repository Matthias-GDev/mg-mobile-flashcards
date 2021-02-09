import { Component } from "react"
import React from 'react';
import { View,Text} from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component{

    render(){
        const { deck } = this.props
        return(
            <View>
                <Text>Ich bin ein DeckView - {deck.title}</Text>
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