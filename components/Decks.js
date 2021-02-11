import React from 'react';
import { View,Text,FlatList,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { connect } from 'react-redux';
import { handleGetAllDecks } from '../actions/shared'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

class Decks extends React.Component {

    componentDidMount(){
        this.props.dispatch(handleGetAllDecks());
    }

    render() {
         const { decks,navigation } = this.props
         const sortedDecks = decks.sort((a, b) => b.timestamp - a.timestamp)

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>{"\n\n\n\n"}Card Decks - ( {decks!==null ? decks.length : ''} )</Text>
                <MaterialCommunityIcons name="cards" size={30} />

                <View style={{minWidth:'80%',flexDirection:'column',justifyContent: 'flex-start',padding:10}}>
                     <FlatList
                        data={sortedDecks}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{
                        flexGrow: 1,
                        }}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => { navigation.navigate('DeckView', { deckId:item.title }); }}>
                                <View style={{backgroundColor:'purple',alignItems: 'center',borderWidth:1,margin:5}}>
                                    <View style={{felx:2, flexDirection:'column'}}>
                                        <Text style={{margin:5, fontSize:25,fontWeight:'bold',color:'white'}}>{item.title}</Text>
                                        <View style={{alignItems: 'center'}}>
                                            <Text style={{margin:2,color:'white'}}>{item.questions.length} - Cards</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            
        )
    }
}

function mapStateToProps(state){

   const allDecks = state.decks ? Object.values(state.decks) : {}

  return {
    decks:allDecks
  }
}

export default connect(mapStateToProps)(Decks);