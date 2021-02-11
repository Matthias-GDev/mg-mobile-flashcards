import { Component } from "react"
import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import renderIf from '../utils/renderif'

class QuizView extends Component {

    constructor(props){
        super(props)
        this.state={
            gameplaydeck:[],
            showAnswer:false,
            lastQuestionNumber:0,
            openQuestions:0,
            actualQuestion:'',
            actualAnswer:'',
            countCorrect:0,
            countWrong:0,
            gameComplete:false
        },
        this.onShowAnswerClick = this.onShowAnswerClick.bind(this)
        this.onCorrectClick = this.onCorrectClick.bind(this)
        this.onWrongClick = this.onWrongClick.bind(this)
        this.changeQuestion = this.changeQuestion.bind(this)
    }

    onShowAnswerClick(){
        const newValue=!this.state.showAnswer
        this.setState({
            showAnswer:newValue
        })
    }

    onCorrectClick(){
        this.setState({
            countCorrect:this.state.countCorrect +1,
            showAnswer:false
        })
        this.changeQuestion(1)
    }

    onWrongClick(){
        this.setState({
            countWrong:this.state.countWrong +1,
            showAnswer:false
        })
        this.changeQuestion(0)
    }

    changeQuestion(answer){
        let nextNumber = 0
        const lastNumber = this.state.lastQuestionNumber
        const actualMaximum = this.props.deck.questions.length
        const {gameplaydeck,openQuestions} = this.state
        const {deck,navigation} = this.props

        if(openQuestions===1)
        {
            let qwrong = this.state.countWrong
            let qright = this.state.countCorrect
            const qtotal = deck.questions.length

            if(answer===1){
                qright=qright+1
            }
            else{
                qwrong=qwrong+1
            }

            this.setState({
                gameplaydeck:[],
                countWrong:0,
                countCorrect:0,
                openQuestions:deck.questions.length
            })

            //Complete
            navigation.navigate('QuizScore',{questionswrong:qwrong,questionsright:qright,questionstotal:qtotal,deckId:deck.title})
        }
        else
        {
            if(gameplaydeck[lastNumber]===undefined)
            {
                this.setState({
                    gameplaydeck:this.state.gameplaydeck[lastNumber]=1
                })
            }

            do {
                nextNumber = (Math.round(((Math.random() * (actualMaximum - 1)) + 1)))-1
            }while(nextNumber===lastNumber && gameplaydeck[nextNumber]===1)

            this.setState({
                actualQuestion:deck.questions[nextNumber].question,
                actualAnswer:deck.questions[nextNumber].answer,
                lastQuestionNumber:nextNumber,
                openQuestions:(this.state.openQuestions-1),
            })
        }
    }

    componentDidMount(){
        this.setState({
            gameplaydeck:this.props.deck,
            actualQuestion:this.props.deck.questions[this.props.startnumber].question,
            actualAnswer:this.props.deck.questions[this.props.startnumber].answer,
            lastQuestionNumber:this.props.startnumber,
            openQuestions:this.props.deck.questions.length
        })
    }

    render(){
        const { deck,playdeck } = this.props
        const {showAnswer,actualQuestion,actualAnswer,openQuestions} = this.state

        return(
            <View style={{minHeight:'85%',alignItems: 'center'}}>
                <View style={{minWidth:'95%', maxWidth:'95%',minHeight:'95%',flex:1,flexDirection:'column',padding:10}}>
                <Text>{"\n\n\n"}</Text>
                     <View style={{alignItems:'center',flex:1,justifyContent: 'flex-start'}}>
                        <Text>{"\n"}</Text>
                        <Text style={{color:'black',fontSize:15}}>(Question Number: {(this.state.lastQuestionNumber+1)} / Questions left: {openQuestions})</Text>
                        <Text>{"\n"}</Text>
                        <Text style={{color:'black',fontSize:25,alignSelf: 'center'}}>{actualQuestion}</Text>
                        <Text>{"\n"}</Text>
                        {renderIf(showAnswer)(<Text style={{color:'white',fontSize:24,backgroundColor:'green'}}>{actualAnswer}</Text>)}
                        <Text>{"\n"}</Text>
                         <TouchableOpacity 
                                            style={{height: '15%',minWidth:'80%', marginTop: 10, backgroundColor:'black'}}
                                            onPress={this.onShowAnswerClick}>
                                        <View style = {{ height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:'black'}}>
                                            <Text style={{color:'white',fontSize:25}}>Show the answer</Text>
                                        </View>
                        </TouchableOpacity>
                     </View>
                     <View style={{height:'25%',justifyContent: 'flex-end'}}>
                        <View style={{flex:1,flexDirection:'row',alignItems: 'center',margin:20,justifyContent:'space-between',alignItems:'stretch',borderColor:'black'}}>
                             <TouchableOpacity 
                                            style={{height: '35%',minWidth:'40%', marginTop: 10, backgroundColor:'black'}}
                                            onPress={this.onCorrectClick}>
                                        <View style = {{ height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:'green'}}>
                                            <Text style={{color:'white',fontSize:25}}>Correct</Text>
                                        </View>
                            </TouchableOpacity>
                            <Text>{"\n\n"}</Text>
                             <TouchableOpacity 
                                            style={{height: '35%',minWidth:'40%', marginTop: 10, backgroundColor:'black'}}
                                            onPress={this.onWrongClick}>
                                        <View style = {{ height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:'red'}}>
                                            <Text style={{color:'white',fontSize:25}}>Wrong</Text>
                                        </View>
                            </TouchableOpacity>
                        </View>
                     </View>
                 </View>
            </View>
        )
    }
}

function mapStateToProps(state , { route }) {

    const { deckId } = route.params;
    const deckItem = deckId ? state.decks[deckId] : {'title':'error'}
    const startnumberforquiz = (Math.round(((Math.random() * (deckItem.questions.length - 1)) + 1)))-1;

	return {
        deck:deckItem,
        startnumber:startnumberforquiz
	};
}

 export default connect(mapStateToProps)(QuizView)