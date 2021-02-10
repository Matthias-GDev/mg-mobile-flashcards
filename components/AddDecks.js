import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View,Text,TouchableOpacity,TextInput,Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { handleSaveNewDeck } from '../actions/shared'

class AddDecks extends Component {

    constructor(props)
    {
        super(props),
        this.state={
            value:''
        },
        this.onChangeTextInput = this.onChangeTextInput.bind(this)
        this.onHandleCreateNewDeck = this.onHandleCreateNewDeck.bind(this) 
    }

    onChangeTextInput(text){
        this.setState({
            value: text
        })
    }

    onHandleCreateNewDeck(){

        const {navigation} = this.props
        
        Keyboard.dismiss();
        
        const NewDeckTitle = this.state.value
        const newdeck = {
            'id':'',
            'title':NewDeckTitle,
            'timecreated':Date.now(),
            questions:[]
        }

        this.props.dispatch(handleSaveNewDeck(newdeck))
        this.setState({
            value: ''
        })

        setTimeout(function() {
				 navigation.navigate('DeckView',{deckId:NewDeckTitle})
		}, 200);
    }


    render(){

        const value = this.state.value

        return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{"\n\n\n"}Add Decks</Text>
                    <MaterialCommunityIcons name="card-plus-outline" size={30} />

                    <View style={{minWidth:'70%', maxWidth:'85%',flex:1,flexDirection:'column',justifyContent: 'flex-start',padding:10}}>
                        <Text>{"\n"}</Text>
                        <View style={{height:'60%',flexDirection:'column'}}>
                            <View style={{alignItems: 'stretch'}}>
                                <Text style={{fontSize:40}}>What is the title of your new deck?</Text>
                            </View>
                            
                            <Text>{"\n"}</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'black', borderWidth: 1,backgroundColor:'white'}}
                                onChangeText={text => this.onChangeTextInput(text)}
                                placeholder=' Deck title'
                                placeholderTextColor='gray'
                                value={value}
                                />
                        </View>
                        
                        <View style={{height:'30%',justifyContent: 'flex-end'}}>
                            <TouchableOpacity 
                                        disabled={value===''} 
                                        style={{height: '35%', marginTop: 10, backgroundColor:'black'}}
                                        onPress={() => this.onHandleCreateNewDeck()}
                                        >
                                <View style = { value!=='' ? { height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:'black'}:{ height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:'gray'}}>
                                    <Text style={{color:'white',fontSize:25}}>Create Deck</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
        )
    }
}

export default connect()(AddDecks)