import { Component } from "react"
import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import renderIf from '../utils/renderif'

class QuizView extends Component {

    constructor(props){
        super(props)
        this.state={
            gameplaydeck:null,
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
        this.changeQuestion()
        this.setState({
            countCorrect:this.state.countCorrect +1,
            showAnswer:false
        })
    }

    onWrongClick(){
        this.changeQuestion()
        this.setState({
            countWrong:this.state.countWrong +1,
            showAnswer:false
        })
    }

    changeQuestion(){
        let nextNumber = 0
        const lastNumber = this.state.lastQuestionNumber
        const actualMaximum = this.props.playdeck.questions.length

        console.log("actualMaximum:" +actualMaximum)
        
        if(actualMaximum===1)
        {
            this.setState({
                gameplaydeck:this.props.playdeck,
                openQuestions:this.props.playdeck.questions.length
            })

            //Complete
            this.props.navigation.navigate('QuizScore')
        }
        else
        {
            do {
                nextNumber = (Math.round(((Math.random() * (actualMaximum - 1)) + 1)))-1
            } while(nextNumber===lastNumber)

            this.setState({
                actualQuestion:this.state.gameplaydeck.questions[nextNumber].question,
                actualAnswer:this.state.gameplaydeck.questions[nextNumber].answer,
                lastQuestionNumber:nextNumber,
                openQuestions:(this.state.openQuestions-1),
                gameplaydeck: this.state.gameplaydeck.questions.splice(lastNumber,1)
            })
        }
    }

    componentDidMount(){
        this.setState({
            gameplaydeck:this.props.playdeck,
            actualQuestion:this.props.playdeck.questions[this.props.startnumber].question,
            actualAnswer:this.props.playdeck.questions[this.props.startnumber].answer,
            lastQuestionNumber:this.props.startnumber,
            openQuestions:this.props.playdeck.questions.length
        })
    }

    render(){
        const { deck,playdeck } = this.props
        const {showAnswer,actualQuestion,actualAnswer,openQuestions} = this.state

        return(
            <View style={{minHeight:'85%',alignItems: 'center'}}>
                <View style={{minWidth:'95%', maxWidth:'95%',minHeight:'95%',flex:1,flexDirection:'column',padding:10}}>
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
                     <View style={{height:'30%',justifyContent: 'flex-end'}}>
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
        playdeck:deckItem,
        startnumber:startnumberforquiz
	};
}

 export default connect(mapStateToProps)(QuizView)