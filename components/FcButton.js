import React, { Component } from 'react';
import { View,Text,TouchableOpacity} from 'react-native';

class FcButton extends Component{
    render(){
        const {backColor,title,onClick,fcDisabled,fcminwidth} = this.props

        return(
            <TouchableOpacity 
                            disabled={fcDisabled}
                            style={{height: '25%', marginTop: 10, backgroundColor:'black'}}
                            onPress={onClick}>
                        <View style = {(fcDisabled===true) ? {height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:'gray'}: { height:'100%', alignItems:'center',justifyContent: 'center',backgroundColor:backColor}}>
                            <Text style={{color:'white',fontSize:25}}>{title}</Text>
                        </View>
            </TouchableOpacity>
        )
    }
}

export default FcButton