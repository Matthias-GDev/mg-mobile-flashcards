import React, { Component } from 'react';
import { View,Text,TextInput} from 'react-native';
import { connect } from 'react-redux';
import { handleNewQuestionToDeck } from '../actions/shared'

import FcButton from "./FcButton";

class NewQuestion extends Component {

    constructor(props){
        super(props)
        this.state={
            question:'',
            answer:'',
        },
        this.onChangeTextInput = this.onChangeTextInput.bind(this)
        this.onHandleSubmitNewQuestion = this.onHandleSubmitNewQuestion.bind(this)
    }

    onChangeTextInput(text,field){
        if(field==='q'){
            this.setState({
                question: text
            })
        }
        else if(field==='a'){
            this.setState({
                answer: text
            })
        }
    }

    onHandleSubmitNewQuestion(){
        const {navigation,deck,dispatch} = this.props
        const {question,answer} = this.state

        const qvalue = question
        const qanswer = answer

        this.setState({
            question:'',
            answer:''
        })

        const card={'question':qvalue,'answer':qanswer}
        
        dispatch(handleNewQuestionToDeck(card,deck.title))
        navigation.navigate('DeckView', { deckId:deck.title })
    }

    render(){

        const {question,answer} = this.state
        const isDisabled = question==='' || answer===''? true:false

        return(
            <View style={{maxHeight:'98%',minHeight:'98%',alignItems: 'center'}}>
                <View style={{minWidth:'85%', maxWidth:'95%',minHeight:'95%',flex:1,flexDirection:'column',padding:10}}>
                    <Text>{"\n"}</Text>
                    <View style={{height:'10%', alignItems:'center',flex:1,justifyContent: 'flex-start'}}>
                        <Text style={{fontSize:20}}>Create New Question and Answer{"\n\n"}</Text>
                        <TextInput
                            style={{ minWidth:'80%', height: 40, borderColor: 'black', borderWidth: 1,backgroundColor:'white'}}
                            onChangeText={text => this.onChangeTextInput(text,'q')}
                            placeholder=' Question'
                            placeholderTextColor='gray'
                            value={question}
                        />
                        <Text>{"\n\n"}</Text>
                        <TextInput
                            style={{minWidth:'80%', height: 40, borderColor: 'black', borderWidth: 1,backgroundColor:'white'}}
                            onChangeText={text => this.onChangeTextInput(text,'a')}
                            placeholder=' Answer'
                            placeholderTextColor='gray'
                            value={answer}
                        />
                    </View>
                    <View style={{height:'35%',justifyContent: 'flex-end'}}>
                        <FcButton title='Submit' onClick={this.onHandleSubmitNewQuestion} fcDisabled={isDisabled}/>
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

export default connect(mapStateToProps)(NewQuestion)