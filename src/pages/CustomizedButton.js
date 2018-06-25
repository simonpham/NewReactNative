import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, TouchableHighlight } from 'react-native';

export class CustomizedButton extends Component {
    render(){
        const { onPressed, title, color } = this.props;
        return(
            <TouchableHighlight onPress = {onPressed}>
                <View style = {styles.Button}>
                    <Text style = {styles.ButtonText}>
                        {title}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create(
    {
        Button :{
            paddingTop:15,
            paddingBottom:15,
            backgroundColor:'#ff5722',
            borderRadius:25,
            borderWidth: 1,
            borderColor: '#00000000'
        },
        ButtonText:{
            color:'#fff',
            textAlign:'center',
            paddingStart:20,
            paddingEnd:20
        }
    }
)