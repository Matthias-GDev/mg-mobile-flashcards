import { Component } from "react"
import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

class QuizScore extends Component {
    render(){
        const {qright,qwrong,qtotal,rproc,wproc,deck,navigation} = this.props
        return(
            <View style={{minHeight:'85%',alignItems: 'center'}}>
                <View style={{minWidth:'95%', maxWidth:'95%',minHeight:'55%',flex:1,flexDirection:'column',padding:10}}>
                    <View style={{alignItems:'center',flex:1,justifyContent: 'flex-start'}}>
                        <Text>{"\n\n"}</Text>
                        <Text style={{fontSize:25}}>Congratulations ! You did it!</Text>
                        <Text>{"\n"}</Text>
                        <Text>Total: {qtotal} Questions</Text>
                        <Text>-----</Text>
                        <Text style={{fontSize:20,color:'green'}}>Correct: {qright} ({rproc}%)</Text>
                        <Text style={{fontSize:20,color:'red'}}>Wrong: {qwrong} ({wproc}%)</Text>
                        
                        
                    </View>
                </View>

               <View style={{height:'40%',justifyContent: 'flex-end'}}>
                        <View style={{flex:1,flexDirection:'column',alignItems: 'center',margin:20,justifyContent:'space-between',alignItems:'stretch',borderColor:'black'}}>
                             <TouchableOpacity 
                                            style={{height: '35%',minWidth:'80%', marginTop: 10, backgroundColor:'black'}}
                                            onPress={()=>{navigation.navigate('QuizView',{deckId:deck.title})}}>
                                        <View style = {{ height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:'green'}}>
                                            <Text style={{color:'white',fontSize:25}}>Restart Quiz</Text>
                                        </View>
                            </TouchableOpacity>
                            <Text>{"\n\n"}</Text>
                             <TouchableOpacity 
                                            style={{height: '35%',minWidth:'80%', marginTop: 10, backgroundColor:'black'}}
                                            onPress={() => { navigation.navigate('DeckView', { deckId:deck.title }); }}>
                                        <View style = {{ height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:'red'}}>
                                            <Text style={{color:'white',fontSize:25}}>Back to Deck</Text>
                                        </View>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state , { route }) {

    const { deckId,questionswrong,questionsright,questionstotal } = route.params;
    const deckItem = deckId ? state.decks[deckId] : {'title':'error'}

    const rightprocentage = (questionsright/(questionstotal/100)).toFixed(2)
    const wrongprocentage = (questionswrong/(questionstotal/100)).toFixed(2)

	return {
        deck:deckItem,
        qright:questionsright,
        qwrong:questionswrong,
        qtotal:questionstotal,
        rproc:rightprocentage,
        wproc:wrongprocentage
	};
}


export default connect(mapStateToProps)(QuizScore)